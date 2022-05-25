<template>
  <div>
    <h4 class="text-xl py-4 text-gray-700">Modo de preparo</h4>
    <ul>
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="text-gray-500 mb-4"
        v-text="step"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecipeSteps',

  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
}
</script>
