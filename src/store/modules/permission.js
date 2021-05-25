import { constantRoutes } from '@/router'

const state = {
	routes: [],
	addRouters: []
}

const mutations = {
	SET_ROUTES: (state) => {
		state.routes = constantRoutes
	}
}

const actions = {
	generateRoutes({ commit }) {
		return new Promise(resolve => {
			commit('SET_ROUTES')
			resolve(state.routes)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}