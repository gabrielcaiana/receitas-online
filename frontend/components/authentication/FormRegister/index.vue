<template>
  <div>
    <form class="mt-6" @submit.prevent="register">
      <div>
        <span class="text-sm text-gray-500">Vamos criar sua conta?</span>
        <h1 class="text-2xl font-bold text-gray-700">
          Preencha o formulário abaixo
        </h1>
      </div>

      <div class="my-5">
        <ReusableInputText
          v-model="form.name"
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome completo"
          class="mb-4"
        />
        <ReusableInputText
          v-model="form.email"
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          class="mb-4"
        />
        <ReusableInputPassword
          v-model="form.password"
          class="mb-4"
          label="Senha"
          placeholder="Digite uma senha"
        />
        <ReusableInputPassword
          v-model="form.confirmPassword"
          label="Confirmar senha"
          placeholder="Digite a mesma senha"
        />
      </div>

      <Button label="Criar conta" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppFormRegister',

  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    }
  },

  methods: {
    register() {
      console.log(this.form)
    },
  },
}
</script>
