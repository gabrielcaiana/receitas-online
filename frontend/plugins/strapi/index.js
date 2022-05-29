import { recipesQuery } from '@/graphql/querys/recipes'

export default function ({ app, store }, inject) {
  const loadRecipes = async (page) => {
    try {
      const client = app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: recipesQuery(page),
      })

      store.commit('recipes/SET_RECIPES', data.recipes.data)
      store.commit('recipes/SET_PAGINATION', data.recipes.meta.pagination)

      return {
        recipes: data.recipes.data,
        pagination: data.recipes.meta.pagination,
      }
    } catch (error) {
      console.log(error)
    }
  }

  inject('strapiApi', {
    loadRecipes,
  })
}
