import apiRoutes from "@/routes/api-routes";
import {create_translate} from "./products/mutations";



const state = {
    COUPON:  []
}


const actions = {

   async SET({commit}){
        const response = await axios.get(apiRoutes('coupon.index'))
        commit('SET',response.data.data)
    },

   async CREATE({commit},coupon){
       const response = await axios.post(apiRoutes('coupon.store'),coupon)
       commit('CREATE',response.data.data)
    },

    async COPY({commit},coupon){
       const response = await axios.post(apiRoutes('coupon.copy',coupon.id),coupon)
       commit('CREATE',response.data.data)
    },



   async UPDATE({commit},coupon){
        const response = await axios.put(apiRoutes('coupon.update',coupon.id),coupon)
        commit('UPDATE',response.data.data)
     },

   async  DESTROY({commit},ids){
       await axios.delete(apiRoutes('coupon.destroy',ids),ids)
        commit('DESTROY',ids)
     },
}

const mutations = {

    SET: (state, COUPON) => {
        state.COUPON = COUPON
    },



    CREATE: (state, coupon) => {
        state.COUPON.push(coupon)

    },

    UPDATE: (state, coupon) => {
        state.COUPON = state.COUPON.map(or => or.id === coupon.id ? coupon : or)
    },

    DESTROY: (state, ids) => {
        state.COUPON = state.COUPON.filter(or => !ids.includes(or.id))
    },

}

const getters = {
    GET_COUPONS: (state) => languageId => {
        return state.COUPON.map(c => {
            c.translate = create_translate(c,languageId)
            return c
        })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}