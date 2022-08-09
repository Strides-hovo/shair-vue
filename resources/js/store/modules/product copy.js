import axios from "axios";
import apiRoutes from "../../routes/api-routes";
import { ITEM_FILTERED } from "@/helpers";

const state = {
  products: [],
  PtoductsTranslates: [],
  photo: {},
  photos: [],
};

const actions = {
  async set({ commit }) {
    let response = await axios.get(apiRoutes("product.index"));
    commit("set", response.data.data);
  },

  async create({ commit }, product) {
    let response = await axios
      .post(apiRoutes("product.store"), product)
      .catch((err) => err);
    commit("create", response.data.data);
  },

  async update({ commit }, product) {
    let response = await axios
      .put(apiRoutes("product.update", product.id), product)
      .catch((err) => err);
    commit("update", response.data.data);
  },

  async destroy({ commit }, product) {
    await axios
      .delete(apiRoutes("product.destroy", product.id), product)
      .catch((err) => alert(err));
    commit("destroy", product);
  },

  async updateSize({ commit }, size) {
    await axios
      .put(apiRoutes("product-size.update", size.id), size)
      .catch((err) => alert(err));
    commit("updateSize");
  },

  async deleteSize({ commit }, ids) {
    await axios
      .delete(apiRoutes("product-size.destroy", ids), ids)
      .catch((err) => alert(err));
    commit("deleteSize", ids);
  },

  async createSize({ commit }, size) {
    let response = await axios
      .post(apiRoutes("product-size.store"), size)
      .catch((err) => alert(err));
    commit("createSize", response.data.data);
  },

  /*Photo*/
  async UpdatePhoto({ commit }, photo) {
    let response = await axios
      .put(apiRoutes("product-photo.update", photo.id), photo)
      .catch((err) => err);
    commit("UpdatePhoto", response.data.data);
  },
};

const mutations = {
  set(state, products) {
    state.products = products;
  },

  create: (state, product) => {
    state.products.push(product);
  },

  updateField: (state, product) => {
    state.products = state.products.map((c) => {
      if (c.id === product.id) {
        if (typeof product.status !== "undefined") {
          c.status = product.status;
        } else {
          c.sorting = product.sorting;
        }
      }
      return c;
    });
  },

  update: (state, product) => {
    state.products = state.products.map((c) => {
      console.log(c.id === product.id);
      return c.id === product.id ? product : c;
    });
  },

  destroy: (state, product) => {
    state.products = state.products.filter((c) => c.id !== product.id);
  },

  createSize: (state, size) => {
    console.log(typeof size.product_id);
    if (typeof size.product_id !== "undefined") {
      state.products.map((cat) => {
        if (cat.id === size.product_id) {
          cat.sizes.push(size);
        }
      });
    }
  },

  updateSize: (state, size) => {
    state.products.map((cat) => {
      if (cat.id === size.product_id) {
        cat.sizes.map((s) => {
          s = s.id === size.id ? size : s;
        });
      }
    });
  },

  deleteSize: (state, ids) => {
    state.products = state.products.map((c) => {
      c.sizes = c.sizes.filter((size) => !ids.includes(size.id));
      return c;
    });
  },

  UpdatePhoto: (state, photo) => {
    state.PtoductsTranslates = state.PtoductsTranslates.map((product) => {
      return product.photos.map((p) => (p.id === photo.id ? photo : p));
    });
  },
};

const getters = {
  all(state) {
    return state.PtoductsTranslates;
  },

  getProduct: (state) => (id, languageId) => {
    const product = state.PtoductsTranslates.find(
      (product) => product.id === id
    );
    console.log("id: ", id, "product: ", product, "lang: ", languageId);
    product.photos =
      typeof product.photos === "undefined" ? [] : product.photos;
    if (product.photos.length > 0) {
      product.photos = product.photos.map((photo) => {
        photo.translate =
          photo.translations.find((tr) => tr.language_id === languageId) || {};
        return photo;
      });
    }

    return product;
  },


  getProductsByLangByCat:(state, getters) =>(languageId, categoryId = null) => {
      const products =
        state.PtoductsTranslates || getters.getProducts(languageId);
      return categoryId
        ? products.filter((product) => product.category_id === categoryId)
        : products;
    },

    

  getProducts: (state) => (languageId) => {
    const products = state.products.map((product) => {
      product.translate =
        product.translations.find(
          (translate) =>
            translate.language_id === +languageId &&
            product.id === translate.product_id
        ) || {};

      product.photos = product.photos.map((photo) => {
        photo.translate =
          photo.translations.find(
            (translate) =>
              translate.language_id === +languageId &&
              product.id === translate.product_photo_id
          ) || {};
        return photo;
      });
      return product;
    });
    return (state.PtoductsTranslates = products);
  },





  getPhotos: (state, getters) => (product_id, languageId) => {
    const product = getters.getProduct(product_id, languageId);
    state.photos = product.photos || [];
    return state.photos;
  },

  getPhoto: (state) => (id) => {
    return state.photos.find((p) => p.id === id);
  },
};





export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
