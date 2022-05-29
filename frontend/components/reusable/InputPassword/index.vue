<template>
  <div>
    <label
      class="block text-md mb-2 text-gray-700"
      for="email"
      v-text="label"
    ></label>
    <input
      id="email"
      class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
      type="password"
      name="password"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInputPassword',

  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>
