<template>
  <div class="w-5/6 m-auto">
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
  </div>
</template>

<script>
import { recipeQuery } from '@/graphql/querys/recipes'
export default {
  name: 'RecipePage',

  async asyncData({ app, params }) {
    let recipe

    try {
      const client = app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: recipeQuery(params.receita),
      })

      recipe = data.recipe.data.attributes
    } catch (error) {
      console.log(error)
    }

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
