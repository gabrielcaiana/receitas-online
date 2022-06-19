export const state = () => ({
  recipes: [],
  pagination: null,
  favorites: null,
})

export const getters = {
  getRecipes: (state) => state.recipes,
  getPagination: (state) => state.pagination,
  getFavorites: (state) => state.favorites,
}

export const mutations = {
  SET_RECIPES: (state, payload) => (state.recipes = payload),
  SET_PAGINATION: (state, payload) => (state.pagination = payload),
  SET_FAVORITES: (state, payload) => (state.favorites = payload),
}
