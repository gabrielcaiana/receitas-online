<template>
  <section>
    <MoleculesEmptyState
      v-if="!recipes.length"
      label="Ainda não foi cadastrada nenhuma receita para essa categoria"
    />

    <div v-else class="p-10">
      <ul class="flex justify-center flex-wrap gap-8">
        <nuxt-link
          v-for="recipe in recipes"
          :key="recipe.id"
          class="w-80"
          :to="{
            name: 'categorias-receita',
            params: {
              categorias: recipe.attributes.category.data.attributes.slug,
              receita: recipe.attributes.slug,
            },
          }"
        >
          <OrganismsCard
            :image="recipe.attributes.img"
            :title="recipe.attributes.name"
            :likes="recipe.attributes.likes"
            :category="recipe.attributes.category.data.attributes.name"
          />
        </nuxt-link>
      </ul>
      <div class="w-full flex justify-center mt-10">
        <MoleculesPagination
          :current-page="pagination.page"
          :total-pages="pagination.pageCount"
          @previous="changePage('previous')"
          @next="changePage('next')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  async asyncData({ $strapiApi }) {
    await $strapiApi.loadRecipes()
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

  methods: {
    changePage(event) {
      const page =
        event === 'next' ? this.pagination.page + 1 : this.pagination.page - 1
      this.$strapiApi.loadRecipes(page)
    },
  },
}
</script>
