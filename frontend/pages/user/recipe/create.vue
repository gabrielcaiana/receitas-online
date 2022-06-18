<template>
  <section class="m-auto p-10 w-3/5">
    <header class="flex justify-between">
      <AtomsTitle class="mb-10" title="Cadastrar nova receita" />
      <div class="w-40">
        <AtomsButton label="Voltar" outlined @click="$router.push('/user')" />
      </div>
    </header>

    <OrganismsRecipeForm :options="categories" />
  </section>
</template>

<script>
export default {
  name: 'NewRecipe',

  async asyncData({ $strapiApi }) {
    const { categories } = await $strapiApi.loadCategories()

    return {
      categories,
    }
  },

  head() {
    return {
      title: 'Cadastrar nova receita',
    }
  },
}
</script>
