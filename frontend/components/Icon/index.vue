<template>
  <div v-on="$listeners">
    <i :height="size" :width="size" :data-feather="name" :stroke="color"></i>
  </div>
</template>

<script>
export default {
  name: 'AppIocon',
  props: {
    name: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'white',
    },
    size: {
      type: String,
      default: '24',
    },
  },
}
</script>
