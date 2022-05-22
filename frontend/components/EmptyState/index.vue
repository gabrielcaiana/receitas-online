<template>
  <div class="flex flex-col items-center justify-center mt-16">
    <img
      :width="size"
      src="@/assets/ilustrations/empty-state.svg"
      alt="Nenhum resultado encontrado"
    />
    <p class="text-body mt-8 text-gray-600" v-text="label"></p>
  </div>
</template>

<script>
export default {
  name: 'AppEmptyState',

  props: {
    label: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: '200',
    },
  },
}
</script>
