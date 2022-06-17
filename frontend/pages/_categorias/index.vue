<template>
  <section class="p-10">
    <MoleculesEmptyState
      v-if="!recipes.length"
      label="Ainda não foi cadastrada nenhuma receita para essa categoria"
    />

    <ul class="flex gap-6">
      <li v-for="recipe in recipes" :key="recipe.id" class="w-80">
        <nuxt-link
          :to="{
            name: 'categorias-receita',
            params: { receita: recipe.attributes.slug },
          }"
        >
          <OrganismsCard
            :image="recipe.attributes.img"
            :title="recipe.attributes.name"
            :likes="recipe.attributes.likes"
          />
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CategoriePage',
  async asyncData({ $strapiApi, params }) {
    const { recipes, pagination } = await $strapiApi.loadRecipesByCategorie(
      params
    )

    return {
      recipes,
      pagination,
    }
  },

  head() {
    return {
      title: this.$route.params.categorias,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Temos diversas categorias de receitas disponíveis',
        },
      ],
    }
  },
}
</script>
