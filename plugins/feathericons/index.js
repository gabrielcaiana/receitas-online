import feather from 'feather-icons'
import Vue from 'vue'

const featherIcons = {
  mounted() {
    feather.replace()
  },
  updated() {
    feather.replace()
  },
}

Vue.mixin(featherIcons)
