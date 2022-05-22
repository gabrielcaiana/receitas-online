<template>
  <div>
    <pre> {{ recipes }}</pre>
    <pre> {{ pagination }}</pre>
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
        query: recipesByCategorieQuery(params.slug),
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
