<template>
  <div
    class="bg-white rounded-lg shadow-md hover:shadow-xl shadow-gray-500 transition duration-300 ease-out hover:ease-in"
    :style="{ height: '400px' }"
  >
    <img
      :src="image"
      :alt="title"
      class="rounded-tl-md rounded-tr-md w-full h-56 object-cover"
    />

    <div class="p-6 text-center flex items-center flex-col">
      <span
        v-if="category"
        class="text-gray-500 mb-4 uppercase text-sm"
        v-text="category"
      ></span>

      <p class="text-gray-700 mb-6" v-text="title"></p>
      <p class="flex gap-2">
        <AtomsIcon name="heart" color="#ef4444" background="#ef4444" />
        <span v-text="`${likes} curtidas`"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',

  props: {
    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
}
</script>
