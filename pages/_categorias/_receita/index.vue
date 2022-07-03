<template>
  <section class="w-5/6 m-auto py-10">
    <MoleculesEmptyState
      v-if="!recipe"
      label="A receita não existe, pesquisa por uma nova receita!"
    />

    <template v-else>
      <AtomsTitle align-center :title="recipe.name" />
      <div class="grid grid-cols-1 gap-4 mt-10">
        <MoleculesRecipeCover :cover="recipe.img" :name="recipe.name" />
        <div class="bg-white p-10 rounded-md">
          <div>
            <div class="flex gap-10">
              <MoleculesRecipeLikes :likes="recipe.likes" />
              <MoleculesRecipeDuration :duration="recipe.duration" />
              <MoleculesRecipePortions :portions="recipe.portions" />
              <MoleculesRecipeAuthor :author="author.username" />
            </div>
            <AtomsDivider />

            <MoleculesRecipeDescription :description="recipe.description" />
          </div>

          <AtomsDivider />

          <div class="grid grid-cols-2 gap-4">
            <MoleculesRecipeIngredients :ingredients="recipe.ingredients" />
            <MoleculesRecipeSteps :steps="recipe.steps" />
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  name: 'RecipePage',

  async asyncData({ $strapiApi, $auth, params }) {
    let favorites 
    const { recipe } = await $strapiApi.recipesBySlug(params.receita)

    if($auth.loggedIn) {
      const id = $auth.user.id
      favorites = await $strapiApi.recipesFavorites(id)
    }

    return {
      recipe,
      author: recipe.author?.data?.attributes,
      favorites: favorites?.recipes
    }
  },

  head() {
    return {
      title: this.recipe?.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.recipe?.description,
        },
      ],
    }
  },
}
</script>