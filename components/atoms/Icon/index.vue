<template>
  <div v-on="$listeners">
    <i
      :height="size"
      :width="size"
      :data-feather="name"
      :stroke="color"
      :fill="background"
    ></i>
  </div>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'AppIocon',
  props: {
    name: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '24',
    },
    background: {
      type: String,
      default: 'transparent',
    },
  },

  mounted() {
    feather.replace()
  },
  updated() {
    feather.replace()
  },
}
</script>
