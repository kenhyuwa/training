export const state = () => ({
    title: '',
})

export const getters = {
    title: state => state.title,
}

export const mutations = {
    CHANGE_TITLE(state, payload) {
        state.title = payload
    },
}

export const actions = {
    changeTitle({commit}, payload) {
        commit('CHANGE_TITLE', payload)
    },
}