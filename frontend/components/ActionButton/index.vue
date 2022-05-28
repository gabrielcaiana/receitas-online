<template>
  <div
    class="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out"
    @click="$emit('click')"
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
  },
}
</script>
