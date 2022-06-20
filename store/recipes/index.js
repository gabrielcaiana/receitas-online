export const state = () => ({
  recipes: [],
  pagination: null,
})

export const getters = {
  getRecipes: (state) => state.recipes,
  getPagination: (state) => state.pagination,
}

export const mutations = {
  SET_RECIPES: (state, payload) => (state.recipes = payload),
  SET_PAGINATION: (state, payload) => (state.pagination = payload),
}
