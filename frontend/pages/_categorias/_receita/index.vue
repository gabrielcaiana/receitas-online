<template>
  <section class="w-5/6 m-auto py-10">
    <MoleculesEmptyState
      v-if="!recipe"
      label="A receita não existe, pesquisa por uma nova receita!"
    />

    <template v-else>
      <MoleculesRecipeTitle :title="recipe.name" />
      <div class="grid grid-cols-1 gap-4">
        <MoleculesRecipeCover :cover="recipe.img" :name="recipe.name" />
        <div class="bg-white p-10 rounded-md">
          <div>
            <div class="flex gap-10">
              <MoleculesRecipeLikes :likes="recipe.likes" />
              <MoleculesRecipeDuration :duration="recipe.duration" />
              <MoleculesRecipePortions :portions="recipe.portions" />
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

  async asyncData({ $strapiApi, params }) {
    const response = await $strapiApi.recipesBySlug(params)

    return {
      recipe: response?.recipe,
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
