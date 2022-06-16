<template>
  <div>
    <AtomsLabel id="countries" :label="label" />
    <select
      v-bind="$attrs"
      id="countries"
      name="countries"
      :class="[
        'px-4 w-full py-2 rounded-md text-sm outline-none border',
        errors.length && 'border-red-500',
      ]"
      @input="updateValue"
    >
      <option autofocus :value="null">Selecione uma categoria</option>

      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.id"
      >
        {{ option.attributes.name }}
      </option>
    </select>
    <span class="text-red-500 text-sm" v-text="errors[0]"></span>
  </div>
</template>

<script>
export default {
  name: 'AppInputSelect',
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
    options: {
      type: Array,
      default: () => [],
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
