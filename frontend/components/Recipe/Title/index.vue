<template>
  <h1 class="text-center text-3xl py-10 text-gray-700" v-text="title"></h1>
</template>

<script>
export default {
  name: 'RecipeTitle',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
