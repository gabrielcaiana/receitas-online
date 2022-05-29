<template>
  <div>
    <AtomsLabel id="password" :label="label" />
    <input
      id="password"
      class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
      type="password"
      name="password"
      :value="value"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInputPassword',
  inheritAttrs: false,

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
