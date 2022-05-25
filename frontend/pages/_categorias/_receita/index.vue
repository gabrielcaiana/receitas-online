<template>
  <div>
    <h1
      class="text-center text-3xl py-10 text-gray-700"
      v-text="recipe.name"
    ></h1>
    <div class="grid grid-cols-1 gap-4">
      <img
        class="rounded-lg h-96 w-full object-cover"
        :src="recipe.img"
        :alt="recipe.name"
      />
      <div class="bg-white p-10 rounded-md">
        <div>
          <div class="flex gap-10">
            <div class="flex gap-3">
              <Icon name="heart" color="#ef4444" background="#ef4444" />
              <span
                class="text-gray-500"
                v-text="`${recipe.likes} curtidas`"
              ></span>
            </div>

            <div class="flex gap-3">
              <Icon name="clock" color="#374151" />
              <span
                class="text-gray-500"
                v-text="`${recipe.duration} minutos`"
              ></span>
            </div>

            <div class="flex gap-3">
              <Icon name="book-open" color="#374151" />
              <span
                class="text-gray-500"
                v-text="`${recipe.portions} porções`"
              ></span>
            </div>
          </div>
          <hr class="my-6" />

          <div>
            <h2 class="text-xl py-4 text-gray-700">Descrição</h2>
            <p class="text-gray-500" v-text="recipe.description"></p>
          </div>
        </div>

        <hr class="my-6" />

        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-xl py-4 text-gray-700">Ingredientes</h3>
            <ul>
              <li
                v-for="(ingredient, index) in recipe.ingredients"
                :key="index"
                class="text-gray-500 mb-4"
                v-text="ingredient"
              ></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xl py-4 text-gray-700">Modo de preparo</h4>
            <ul>
              <li
                v-for="(step, index) in recipe.steps"
                :key="index"
                class="text-gray-500 mb-4"
                v-text="step"
              ></li>
            </ul>
          </div>
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
}
</script>
