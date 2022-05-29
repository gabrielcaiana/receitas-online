<template>
  <button
    type="submit"
    class="text-white w-full bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 my-4 py-3"
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
