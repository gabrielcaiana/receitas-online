<template>
  <div>
    <div>
      {{ $route.params.category }}
    </div>

    <pre>{{ recipe }}</pre>
  </div>
</template>

<script>
import { recipeQuery } from '@/graphql/querys/recipes'
export default {
  name: 'RecipePage',

  async asyncData({ app, params }) {
    let recipe

    try {
      const client = app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: recipeQuery(params.receita),
      })

      recipe = data.recipe.data
    } catch (error) {
      console.log(error)
    }

    return {
      recipe,
    }
  },
}
</script>
