<template>
  <div>
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
            :category="recipe.attributes.category.data.attributes.name"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { recipesQuery } from '@/graphql/querys/recipes'
export default {
  name: 'IndexPage',
  async asyncData({ app }) {
    try {
      const client = app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: recipesQuery(),
      })

      return {
        recipes: data.recipes.data,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
