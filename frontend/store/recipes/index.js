import { recipesQuery } from '@/graphql/querys/recipes'

export const state = () => ({
  recipes: [],
  pagination: null,
})

export const getters = {
  getRecipes: (state) => state.recipes,
  getPagination: (state) => state.pagination,
}

export const mutations = {
  SET_RECIPES: (state, payload) => {
    state.recipes = payload
  },

  SET_PAGINATION: (state, payload) => {
    state.pagination = payload
  },
}

export const actions = {
  async loadRecipes({ commit }, page) {
    try {
      const client = this.app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: recipesQuery(page),
      })

      commit('SET_RECIPES', data.recipes.data)
      commit('SET_PAGINATION', data.recipes.meta.pagination)
    } catch (error) {
      console.log(error)
    }
  },
}
