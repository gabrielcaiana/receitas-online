<template>
  <section class="m-auto p-10 w-3/5">
    <header class="flex justify-between">
      <AtomsTitle class="mb-10" title="Editar receita" />
      <div class="w-40">
        <AtomsButton label="Voltar" outlined @click="$router.push('/user')" />
      </div>
    </header>

    <OrganismsRecipeForm v-if="recipe" :recipe="recipe" :options="categories" />
  </section>
</template>

<script>
export default {
  name: 'NewRecipe',

  async asyncData({ $strapiApi, params }) {
    const { categories } = await $strapiApi.loadCategories()

    const { recipe } = await $strapiApi.recipesBySlug(params.slug)

    return {
      categories,
      recipe: { ...recipe, category: recipe?.category?.data?.id },
    }
  },

  head() {
    return {
      title: 'Editar receita',
    }
  },
}
</script>
