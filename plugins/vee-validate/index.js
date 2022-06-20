import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

import { required, email } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'Este campo é obrigatório',
})

extend('email', {
  ...email,
  message: 'O campo de {_field_} precisa ser válido',
})

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: 'O campo de {_field_} deve ter {min} a {max} caracteres',
})

extend('min', {
  validate(value, { min }) {
    return value.length >= min
  },
  params: ['min'],
  message: 'O campo de {_field_} deve conter no mínimo {min} caracteres',
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'As senhas não correspondem',
})
