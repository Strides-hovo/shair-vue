import axios from "axios";
import apiRoutes from "@/routes/api-routes";

const actions = {

  async set({ commit }) {
    let response = await axios.get(apiRoutes("product.index"));
    commit("SET", (await response.data.data));
  },

  async create({ commit }, product) {
    let response = await axios
      .post(apiRoutes("product.store"), product)
      .catch((err) => BackendErrorHandler(err) );
    commit("create", response.data.data);
  },

  async update({ commit }, product) {
    let response = await axios
      .put(apiRoutes("product.update", product.id), product)
      .catch((err) => BackendErrorHandler(err));
    commit("UPDATE_PRODUCT", response.data.data);
  },

  async destroy({ commit }, product) {
    await axios
      .delete(apiRoutes("product.destroy", product.id), product)
      .catch((err) => BackendErrorHandler(err));
    commit("destroy", product);
  },


  /*Photo*/
  async UpdatePhoto({ commit }, photo) {
    let response = await axios
      .put(apiRoutes("product-photo.update", photo.id), photo)
      .catch((err) => BackendErrorHandler(err));
    commit("UPDATE_PHOTO", response.data.data);
  },


async deletePhotos({commit},ids) {
  const response = await axios.delete(apiRoutes('product-photo.destroy',ids),ids)
  commit('DELETE_PHOTOS',ids)
},

async createPhoto({commit},photo) {
  const response = await axios.post(apiRoutes('product-photo.store'),photo)
  commit('CREATE_PHOTO', (await response.data.data))
}

};


export default actions 
