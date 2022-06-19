export const state = () => ({
  token: null,
  recipesFavorites: null,
})

export const getters = {
  getToken: (state) => state.token,
  getRecipesFavorites: (state) => state.recipesFavorites,
}

export const mutations = {
  SET_TOKEN: (state, payload) => (state.token = payload),
  SET_RECIPES_FAVORITES: (state, payload) => (state.recipesFavorites = payload),
}
