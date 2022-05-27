<template>
  <section>
    <ul class="flex justify-center flex-wrap gap-8">
      <nuxt-link
        v-for="recipe in recipes"
        :key="recipe.id"
        class="w-80"
        :to="{
          name: 'categorias-receita',
          params: {
            categorias: recipe.attributes.category.data.attributes.slug,
            receita: recipe.id,
          },
        }"
      >
        <Card
          :image="recipe.attributes.img"
          :title="recipe.attributes.name"
          :likes="recipe.attributes.likes"
          :category="recipe.attributes.category.data.attributes.name"
        />
      </nuxt-link>
    </ul>
  </section>
</template>

<script>
import { recipesQuery } from '@/graphql/querys/recipes'
export default {
  name: 'IndexPage',
  async asyncData({ app, store }) {
    try {
      const client = app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: recipesQuery(),
      })

      store.commit('recipes/SET_RECIPES', data.recipes.data)

      return {
        recipes: data.recipes.data,
      }
    } catch (error) {
      console.log(error)
    }
  },

  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'No receitas online você encontra centenas de novas ideias para se deliciar',
        },
      ],
    }
  },
}
</script>
