<template>
  <button
    :type="type"
    :class="[
      'w-full focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm py-3',
      primary && 'bg-red-500 hover:bg-red-800 focus:ring-red-300 text-white',
      outlined &&
        'bg-transparent border-2 border-red-500 hover:bg-red-100 focus:ring-gray-300 text-red-500',
      disabled && 'bg-gray-300 cursor-not-allowed',
    ]"
    @click="$emit('click')"
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

    outlined: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    primary: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'submit',
    },
  },
}
</script>
