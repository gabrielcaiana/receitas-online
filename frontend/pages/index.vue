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
    <div class="w-full flex justify-center mt-10">
      <Pagination
        :current-page="pagination.page"
        :total-pages="pagination.pageCount"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  asyncData({ store }) {
    store.dispatch('recipes/loadRecipes')
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

  computed: {
    ...mapGetters({
      recipes: 'recipes/getRecipes',
      pagination: 'recipes/getPagination',
    }),
  },
}
</script>
