<template>
  <label
    class="block text-md mb-2 text-gray-700"
    :for="id"
    v-text="label"
  ></label>
</template>

<script>
export default {
  name: 'AppLabel',

  props: {
    label: {
      type: String,
      required: true,
    },

    id: {
      type: String,
      required: true,
    },
  },
}
</script>
