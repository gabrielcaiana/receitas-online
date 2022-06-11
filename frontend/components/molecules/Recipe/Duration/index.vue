<template>
  <div class="flex gap-3">
    <AtomsIcon name="clock" color="#374151" />
    <span
      class="text-gray-500"
      v-text="`Tempo: ${formatedTime(duration)}`"
    ></span>
  </div>
</template>

<script>
import { formatedTime } from '~/utils/formatedTime'
export default {
  name: 'RecipeDuration',

  props: {
    duration: {
      type: Number,
      required: true,
    },
  },

  methods: {
    formatedTime,
  },
}
</script>
