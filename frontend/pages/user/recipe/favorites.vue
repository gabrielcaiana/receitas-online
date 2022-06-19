<template>
  <section class="m-auto p-10">
    <header class="flex justify-between">
      <AtomsTitle class="mb-10" title="Receitas favoritas" />
      <div class="w-40">
        <AtomsButton label="Voltar" outlined @click="$router.push('/')" />
      </div>
    </header>

    <ul class="flex flex-wrap gap-5">
      <li v-for="recipe in recipes" :key="recipe.id" class="w-80">
        <nuxt-link
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
          />
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'RecipesFavorites',

  async asyncData({ $strapiApi, $auth }) {
    try {
      const id = $auth.user.id
      const { recipes } = await $strapiApi.recipesFavorites(id)

      return {
        recipes,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
