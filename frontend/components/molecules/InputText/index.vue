<template>
  <div>
    <label
      class="block text-md mb-2 text-gray-700"
      for="email"
      v-text="label"
    ></label>
    <input
      :id="type"
      :class="[
        'px-4 w-full py-2 rounded-md text-sm outline-none border',
        errors.length && 'border-red-500',
      ]"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="updateValue"
    />
    <span class="text-red-500 text-sm" v-text="errors[0]"></span>
  </div>
</template>

<script>
export default {
  name: 'AppInputText',
  inheritAttrs: false,

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
