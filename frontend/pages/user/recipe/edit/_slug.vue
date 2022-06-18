<template>
  <section class="m-auto p-10 w-3/5">
    <header class="flex justify-between">
      <AtomsTitle class="mb-10" title="Editar receita" />
      <div class="w-40">
        <AtomsButton label="Voltar" outlined @click="$router.push('/user')" />
      </div>
    </header>

    {{ slug }}

    <!-- <OrganismsRecipeCreate :options="categories" /> -->
  </section>
</template>

<script>
export default {
  name: 'NewRecipe',

  async asyncData({ $strapiApi, params }) {
    const { categories } = await $strapiApi.loadCategories()

    return {
      categories,
      slug: params.slug,
    }
  },

  head() {
    return {
      title: 'Editar receita',
    }
  },
}
</script>
