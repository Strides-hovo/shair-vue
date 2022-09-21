import apiRoutes from "@/routes/api-routes";



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

   async ADD_COUPON({commit},name){
        const response = await axios.post(apiRoutes('coupon.apply',name),name)
        commit('ADD_COUPON',response.data.data)

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

    ADD:( state, order) => {
        const index = state.CART.findIndex((item) => {
            return item.product_id === order.product_id
        })
        if (index !== -1){
            state.CART[index].quantity = order.quantity
        }
        else{
            state.CART.push(order)
        }

    },

    ADD_TAKE: (state, order ) => {
        const index = state.CART.findIndex((item) => {
            return item.product_id === order.product_id
        })
        if (index !== -1){
            state.CART[index].quantity = order.quantity
        }
    },


    CREATE: (state, order) => {
        if (order && 'id' in order ){
            state.CART = []
        }
    },

    UPDATE: (state, order) => {
        state.CART = state.CART.map(or => or.id === order.id ? order : or)
    },

    DESTROY: (state, order) => {
        state.CART = state.CART.filter(or => or.product_id !== order.product_id)
    },

    ADD_COUPON: (state, coupon) => {
        if (coupon){
            const orders = state.CART
                .filter(order => coupon.category_ids.includes(order.category_id) )
                .map(order => {
                    if(coupon.operation === 'sum'){
                        order.discount = coupon.discount
                    }
                    else if(coupon.operation === 'percent'){
                        order.discount = (order.price * order.quantity) * (coupon.discount / 100)
                    }
                    order.coupon_id = coupon.id
                    return order
                })
            console.log(coupon, state.CART, orders )
        }


    }

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