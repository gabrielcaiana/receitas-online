<template>
  <div>
    <AtomsLabel id="password" :label="label" />
    <input
      id="password"
      :class="[
        'px-4 w-full py-2 rounded-md text-sm outline-none border',
        errors.length && 'border-red-500',
      ]"
      type="password"
      name="password"
      :value="value"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="updateValue"
    />
    <span class="text-red-500 text-sm" v-text="errors[0]"></span>
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
