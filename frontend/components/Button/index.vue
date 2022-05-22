<template>
  <button
    type="submit"
    class="text-white absolute right-2.5 bottom-2.5 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
    v-text="label"
  ></button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
