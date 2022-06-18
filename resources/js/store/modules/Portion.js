

const state = {
    portions: [
        {id: 1,width: 127,height: 127},
        {id: 2,width: 250,height: 167},
        {id: 3,width: 115,height: 180},
    ]
};

const actions = {
    addPortion({commit}, portions) {
        commit('setPortion', portions)
    }
};

const mutations = {
    setPortion(state, portions){
        state.portions.push(portions)
    }
};


const getters = {
    getPortions(state){
        return state.portions;
    },

};

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}