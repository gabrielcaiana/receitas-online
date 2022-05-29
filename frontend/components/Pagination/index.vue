<template>
  <div class="flex items-center gap-6">
    <ActionButton
      :disabled="currentPage === 1"
      icon="arrow-left"
      @click="$emit('previous')"
    />
    <span
      class="text-gray-500 text-body"
      v-text="`${currentPage} de ${totalPages}`"
    ></span>
    <ActionButton
      :disabled="currentPage === totalPages"
      icon="arrow-right"
      @click="$emit('next')"
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
}
</script>
