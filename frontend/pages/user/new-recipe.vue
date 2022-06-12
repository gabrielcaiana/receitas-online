<template>
  <section class="m-auto p-10">
    <header class="flex justify-between">
      <AtomsTitle class="mb-10" title="Cadastrar nova receita" />
      <div class="w-40">
        <AtomsButton label="Voltar" outlined @click="$router.go(-1)" />
      </div>
    </header>
  </section>
</template>

<script>
export default {
  name: 'NewRecipe',

  head() {
    return {
      title: 'Cadastrar nova receita',
    }
  },
}
</script>
