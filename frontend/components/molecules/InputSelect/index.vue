<template>
  <div>
    <AtomsLabel id="countries" label="Categoria" />
    <select
      v-bind="$attrs"
      id="countries"
      name="countries"
      :value="value"
      :class="[
        'px-4 w-full py-2 rounded-md text-sm outline-none border',
        errors.length && 'border-red-500',
      ]"
      @input="updateValue"
    >
      <!-- <option v-for="(option, index) in options" :key="index" v:alue="">
        Choose a country
      </option> -->
    </select>

    <pre>{{ options }}</pre>

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
      required: true,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value)
      },
    },
  },
}
</script>
