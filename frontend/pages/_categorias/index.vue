<template>
  <div>
    <EmptyState
      v-if="!recipes.length"
      label="Ainda não foi cadastrada nenhuma receita para essa categoria"
    />

    <ul>
      <li v-for="recipe in recipes" :key="recipe.id" class="w-80">
        <nuxt-link
          :to="{
            name: 'categorias-receita',
            params: { category: $route.params.category, receita: recipe.id },
          }"
        >
          <Card
            :image="recipe.attributes.img"
            :title="recipe.attributes.name"
            :likes="recipe.attributes.likes"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { recipesByCategorieQuery } from '@/graphql/querys/recipes'
export default {
  name: 'CategoriePage',
  async asyncData({ app, params }) {
    let recipes, pagination

    try {
      const client = app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: recipesByCategorieQuery(params.categorias),
      })

      recipes = data.recipes.data
      pagination = data.recipes.meta.pagination
    } catch (error) {
      console.log(error)
    }

    return {
      recipes,
      pagination,
    }
  },
}
</script>
