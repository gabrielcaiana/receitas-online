import {
  recipesQuery,
  recipesByCategorieQuery,
  recipesBySlugQuery,
  recipeSearchQuery,
} from '@/graphql/querys/recipes'

import { categoriesQuery } from '@/graphql/querys/categories'
import { registerUserMutation } from '@/graphql/mutations/register'

export default function ({ app, store }, inject) {
  const client = app.apolloProvider.defaultClient

  // recipes
  const loadRecipes = async (page) => {
    try {
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
  const loadRecipesByCategorie = async (params) => {
    try {
      const { data } = await client.query({
        query: recipesByCategorieQuery(params.categorias),
      })

      return {
        recipes: data.recipes.data,
        pagination: data.recipes.meta.pagination,
      }
    } catch (error) {
      console.log(error)
    }
  }
  const recipesBySlug = async (params) => {
    try {
      const { data } = await client.query({
        query: recipesBySlugQuery(params.receita),
      })
      return {
        recipe: data.recipes.data[0].attributes,
      }
    } catch (error) {
      console.log(error)
    }
  }
  const recipeSearch = async (search) => {
    try {
      const { data } = await client.query({
        query: recipeSearchQuery(search),
      })
      return {
        recipes: data.recipes.data,
      }
    } catch (error) {
      console.log(error)
    }
  }
  // categorie
  const loadCategories = async () => {
    try {
      const { data } = await client.query({
        query: categoriesQuery(),
      })

      return {
        categories: data.categories.data,
      }
    } catch (error) {
      console.log(error)
    }
  }

  // auth
  const register = async (user) => {
    try {
      const { data } = await client.mutate({
        mutation: registerUserMutation(user),
      })

      return {
        user: data,
      }
    } catch (error) {
      console.log(error)
    }
  }

  inject('strapiApi', {
    loadRecipes,
    loadRecipesByCategorie,
    recipesBySlug,
    recipeSearch,
    loadCategories,
    register,
  })
}
