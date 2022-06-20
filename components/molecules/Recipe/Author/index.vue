<template>
  <div class="flex gap-3">
    <AtomsIcon name="user" color="#374151" />
    <p class="text-gray-500" v-text="author"></p>
  </div>
</template>

<script>
export default {
  name: 'RecipeAuthor',

  props: {
    author: {
      type: String,
      default: null,
    },
  },
}
</script>
