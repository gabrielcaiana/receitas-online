<template>
  <section class="m-auto p-10">
    <AtomsTitle class="mb-10" :title="`Bem vindo(a) ${$auth.user.username}!`" />
    <OrganismsRecipeList title="Minhas receitas" :recipes="recipes" />
  </section>
</template>

<script>
export default {
  name: 'AppUser',
  middleware: 'auth',

  async asyncData({ $strapiApi, $auth }) {
    const id = $auth.user.id
    const { recipe } = await $strapiApi.recipesByUser(id)

    return {
      recipes: recipe,
    }
  },

  head() {
    return {
      title: 'Perfil',
    }
  },
}
</script>
