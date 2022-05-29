<template>
  <div class="flex gap-3">
    <AtomsIcon name="book-open" color="#374151" />
    <span class="text-gray-500" v-text="`${portions} porções`"></span>
  </div>
</template>

<script>
export default {
  name: 'RecipePortions',

  props: {
    portions: {
      type: Number,
      required: true,
    },
  },
}
</script>
