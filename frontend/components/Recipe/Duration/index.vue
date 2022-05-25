<template>
  <div class="flex gap-3">
    <Icon name="clock" color="#374151" />
    <span class="text-gray-500" v-text="`${duration} minutos`"></span>
  </div>
</template>

<script>
export default {
  name: 'RecipeDuration',

  props: {
    duration: {
      type: Number,
      required: true,
    },
  },
}
</script>
