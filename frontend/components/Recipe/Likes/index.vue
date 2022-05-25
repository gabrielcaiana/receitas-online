<template>
  <div class="flex gap-3">
    <Icon name="heart" color="#ef4444" background="#ef4444" />
    <span class="text-gray-500" v-text="`${likes} curtidas`"></span>
  </div>
</template>

<script>
export default {
  name: 'RecipeLike',

  props: {
    likes: {
      type: Number,
      required: true,
    },
  },
}
</script>
