<template>
  <div>
    <h3 class="text-xl py-4 text-gray-700">Ingredientes</h3>
    <ul>
      <li
        v-for="(ingredient, index) in ingredients"
        :key="index"
        class="text-gray-500 mb-4"
        v-text="ingredient"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecipeIngredients',

  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
}
</script>
