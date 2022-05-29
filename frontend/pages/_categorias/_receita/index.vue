<template>
  <section v-if="recipe" class="w-5/6 m-auto">
    <RecipeTitle :title="recipe.name" />
    <div class="grid grid-cols-1 gap-4">
      <RecipeCover :cover="recipe.img" :name="recipe.name" />
      <div class="bg-white p-10 rounded-md">
        <div>
          <div class="flex gap-10">
            <RecipeLikes :likes="recipe.likes" />
            <RecipeDuration :duration="recipe.duration" />
            <RecipePortions :portions="recipe.portions" />
          </div>
          <Divider />

          <RecipeDescription :description="recipe.description" />
        </div>

        <Divider />

        <div class="grid grid-cols-2 gap-4">
          <RecipeIngredients :ingredients="recipe.ingredients" />
          <RecipeSteps :steps="recipe.steps" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecipePage',

  async asyncData({ $strapiApi, params }) {
    const { recipe } = await $strapiApi.recipesBySlug(params)

    return {
      recipe,
    }
  },

  head() {
    return {
      title: this.recipe.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.recipe.description,
        },
      ],
    }
  },
}
</script>
