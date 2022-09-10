
import apiRoutes from "@/routes/api-routes";
import {BackendErrorHandler} from "@/helpers";
import {export_data} from "../../../helpers";

const actions = {

  async set({ commit }) {
    let response = await axios.get(apiRoutes("product.index"));
    commit("SET", (await response.data.data));
  },






  async create({ commit }, product) {
    let response = await axios
      .post(apiRoutes("product.store"), product)
      .catch((err) => BackendErrorHandler(err) );
    commit("CREATE_PRODUCT", response.data.data);
  },


  async status({ commit }, status) {
    let response = await axios
      .put(apiRoutes("product.status",Number(status) ),Number(status))
    commit("SET", (await response.data.data));
  },

  async copy({ commit }, product) {
    let response = await axios
        .post(apiRoutes("product.copy"), product)
        .catch((err) => BackendErrorHandler(err) );
    commit("CREATE_PRODUCT", response.data.data);
  },

  async export({ commit }, id ){
    await axios.get(apiRoutes('product.export', id ), { params: {id} } ).then(response => {
      export_data(apiRoutes('product.export',id), 'name')
    })
  },


  async import_file({ commit },file ){
    await axios.post( apiRoutes('product.import'),  file )
  },


  async updateOrCreateSize({ commit }, size) {
    let response = await axios
      .post(apiRoutes("product.size.updateOrCreate"), size)
      .catch((err) => BackendErrorHandler(err) );

  },

  async update({ commit }, product) {
    let response = await axios
      .put(apiRoutes("product.update", product.id), product)
      .catch((err) => BackendErrorHandler(err));
    commit("UPDATE_PRODUCT", response.data.data);
  },

  async updateAdditions({ commit }, product) {
    let response = await axios
      .put(apiRoutes("product.update.additions", product.id), product)
      .catch((err) => BackendErrorHandler(err));
    commit("UPDATE_PRODUCT", response.data.data);
  },


  async deleteAdditions({ commit }, {id, ids}) {
    console.log( id, ids )
    let response = await axios
      .delete(apiRoutes("product.delete.additions",  id, ids), id, ids)
      .catch((err) => BackendErrorHandler(err));
    commit("UPDATE_PRODUCT", response.data.data);
  },

  async destroy({ commit }, ids) {
    await axios
      .delete(apiRoutes("product.destroy", ids), ids)
      .catch((err) => BackendErrorHandler(err));
    commit("DELETE_PRODUCTS", ids);
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
