import apiRoutes from "@/routes/api-routes";
import axios from "axios";


const state = {
    CART:  []
}


const actions = {

   async SET({commit}){
        const response = await axios.get(apiRoutes('order.index'))
        commit('SET',response.data.data)
    },

   async CREATE({commit},product){
       const response = await axios.post(apiRoutes('order.store'),product)
       commit('CREATE',response.data.data)
    },



   async UPDATE({commit},order){
        const response = await axios.put(apiRoutes('order.update',order.id),order)
        commit('UPDATE',response.data.data)
     },

     DESTROY({commit},order){
        const response = axios.post(apiRoutes('order.destroy',order.id),order)
        commit('DESTROY',order)
     },
}

const mutations = {

    SET: (state, cart) => {
        state.CART = cart
    },

    ADD:( state, product) => {
       const pro = state.CART.find(pr => pr.product_id === product.product_id)
       if (pro) {
        state.CART = state.CART.map(pr => {
           if (pr.product_id === product.product_id ) {
                pr.quantity = product.quantity
           }
           return pr 
        })
       }
       else{
        state.CART.push(product)
       }
        
    },

    CREATE: (state, order) => {
        state.CART.push(order)
    },

    UPDATE: (state, order) => {
        state.CART = state.CART.map(or => or.id === order.id ? order : or)
    },

    DESTROY: (state, order) => {
        state.CART = state.CART.filter(or => or.id !== order.id)
    },

}

const getters = {
    GET_CART: (state) => {
        return state.CART
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}