<template>
  <h1
    :class="['text-3xl  text-gray-700', alignCenter && 'text-center']"
    v-text="title"
  ></h1>
</template>

<script>
export default {
  name: 'RecipeTitle',

  props: {
    title: {
      type: String,
      required: true,
    },

    alignCenter: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
