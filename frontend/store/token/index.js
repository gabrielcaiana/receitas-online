export const state = () => ({
  token: null,
})

export const getters = {
  getToken: (state) => state.token,
}

export const mutations = {
  SET_TOKEN: (state, payload) => (state.token = payload),
}
