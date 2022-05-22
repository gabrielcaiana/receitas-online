<template>
  <div class="mt-20 flex flex-col items-center">
    <img width="400" src="@/assets/icons/breakfast.svg" class="mb-12" alt="" />
    <h1 class="text-4xl col-span text-gray-700 text-center">
      Aqui você encontra centenas<br />
      de receitas deliciosas!
    </h1>

    {{ recipes }}
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
        recipes: data,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
