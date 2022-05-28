<template>
  <div class="flex items-center gap-6">
    <ActionButton
      class="bg-red-500 hover:bg-red-700"
      icon="arrow-left"
      @click="previous"
    />
    <span
      class="text-gray-500 text-body"
      v-text="`${currentPage} de ${totalPages}`"
    ></span>
    <ActionButton
      class="bg-red-500 hover:bg-red-700"
      icon="arrow-right"
      @click="next"
    />
  </div>
</template>

<script>
export default {
  name: 'AppPagination',

  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },

  methods: {
    next() {
      alert('next')
    },

    previous() {
      alert('previous')
    },
  },
}
</script>
