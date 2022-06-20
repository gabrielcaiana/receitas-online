<template>
  <img class="rounded-lg h-96 w-full object-cover" :src="cover" :alt="name" />
</template>

<script>
export default {
  name: 'RecipeCover',

  props: {
    cover: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
}
</script>
