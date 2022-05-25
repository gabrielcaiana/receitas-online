<template>
  <div class="flex gap-3">
    <Icon name="clock" color="#374151" />
    <span class="text-gray-500" v-text="`Tempo: ${formatedTime}`"></span>
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

  computed: {
    formatedTime() {
      const hours = Math.floor(this.duration / 60)
      const minutes = this.duration % 60
      const total = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2)
      return total
    },
  },
}
</script>
