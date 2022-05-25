<template>
  <div>
    <h2 class="text-xl py-4 text-gray-700">Descrição</h2>
    <p class="text-gray-500" v-text="description"></p>
  </div>
</template>

<script>
export default {
  name: 'RecipeDescription',

  props: {
    description: {
      type: String,
      default: null,
    },
  },
}
</script>
