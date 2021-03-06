import {
  recipesQuery,
  recipesByCategorieQuery,
  recipesBySlugQuery,
  recipeSearchQuery,
  recipesByUserQuery,
  recipeFavorites,
  getLikes
} from '@/graphql/querys/recipes'

import {
  createRecipeMutation,
  updateRecipeMutation,
  deleteRecipeMutation,
  favoriteRecipeMutation
} from '~/graphql/mutations/recipes'

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
  const recipesBySlug = async (slug) => {
    try {
      const { data } = await client.query({
        query: recipesBySlugQuery(slug),
      })
      return {
        recipe: {
          ...data.recipes.data[0].attributes,
          id: data.recipes.data[0].id,
        },
      }
    } catch (error) {
      console.log(error)
    }
  }
  const recipesByUser = async (id) => {
    try {
      const { data } = await client.query({
        query: recipesByUserQuery(id),
      })
      return {
        recipe: data.recipes.data,
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
  const recipesFavorites = async (id) => {
    try {
      const { data } = await client.query({
        query: recipeFavorites(id),
      })

      return {
        recipes: data?.usersPermissionsUser?.data?.attributes?.favorites?.data,
      }
    } catch (error) {
      console.log(error)
    }
  }
  const recipeGetLikes = async (id) => {
    try {
      const { data } = await client.query({
        query: getLikes(id),
      })

      return data?.recipe.data?.attributes
    } catch (error) {
      console.log(error)
    }
  }

  const createRecipe = async (recipe) => {
    try {
      const token = app.$auth.strategy.token.get()
      const response = await client.mutate({
        context: {
          headers: { authorization: token },
        },
        mutation: createRecipeMutation(),
        variables: recipe,
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }
  const updateRecipe = async (recipe) => {
    try {
      const token = app.$auth.strategy.token.get()
      const response = await client.mutate({
        context: {
          headers: { authorization: token },
        },
        mutation: updateRecipeMutation(),
        variables: recipe,
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }
  const updateFavoriteRecipeUser = async ({id, likes, idUser, favorites}) => {
    try {
      const token = app.$auth.strategy.token.get()
      const response = await client.mutate({
        context: {
          headers: { authorization: token },
        },
        mutation: favoriteRecipeMutation(),
        variables: {
          id,
          likes,
          idUser,
          favorites
        },
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const deleteRecipe = async (id) => {
    try {
      const token = app.$auth.strategy.token.get()
      const response = await client.mutate({
        context: {
          headers: { authorization: token },
        },
        mutation: deleteRecipeMutation(),
        variables: { id },
      })
      return response
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
    recipesByUser,
    recipeSearch,
    recipesFavorites,
    recipeGetLikes,
    createRecipe,
    updateRecipe,
    updateFavoriteRecipeUser,
    deleteRecipe,
    loadCategories,
    register,
  })
}
