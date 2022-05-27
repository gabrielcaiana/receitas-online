export const state = () => ({
 recipes: []
})

export const getters = {
  getRecipes: (state) => state.recipes
}

export const mutations = {
  SET_RECIPES: (state, payload) => {
    state.recipes = payload
  }
}