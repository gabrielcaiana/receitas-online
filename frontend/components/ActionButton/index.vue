<template>
  <div
    :class="[
      'rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out',
      disabled ? 'bg-gray-300' : 'bg-red-500',
    ]"
    @click="onClick"
  >
    <Icon :name="icon" :color="color" />
  </div>
</template>

<script>
export default {
  name: 'AppActionButton',

  props: {
    icon: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: '#fff',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick() {
      if (!this.disabled) this.$emit('click')
    },
  },
}
</script>
