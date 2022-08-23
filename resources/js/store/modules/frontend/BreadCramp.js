
const state = {
    Breadcrumbs: []
}

const mutations = {

    ADD_CRAMP: (state, cramp) => {
        const last = state.Breadcrumbs[state.Breadcrumbs.length - 1]
        if (last?.name !== cramp.name)
        state.Breadcrumbs.push(cramp)
    }
}


const getters = {

    GET_CRAMPS: (state) => (routeNames) => {

        const breads = state.Breadcrumbs
            .filter(({name}) => routeNames?.includes(name))

        return [...new Map(breads.map((item) => [item['name'], item])).values()]
            .slice(0,3)
            .sort((a,b) => {
                const a1 = routeNames.indexOf(a.name)
                const b1 = routeNames.indexOf(b.name)
                return a1 - b1
            })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}