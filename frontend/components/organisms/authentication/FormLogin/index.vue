<template>
  <div>
    <form class="mt-6" @submit.prevent="login">
      <div>
        <span class="text-sm text-gray-500">Bem vindo de volta</span>
        <h1 class="text-2xl font-bold text-gray-700">
          Faça o login para acessar sua conta
        </h1>
      </div>

      <div class="my-5">
        <MoleculesInputText
          v-model="form.identifier"
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          class="mb-4"
        />
        <MoleculesInputPassword
          v-model="form.password"
          label="Senha"
          placeholder="Digite sua senha"
        />
      </div>

      <AtomsButton primary label="Entrar" />
    </form>

    <p class="mt-8 text-gray-500">
      Ainda não tem uma conta?
      <nuxt-link to="/register" class="cursor-pointer text-sm text-red-500">
        criar agora</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppFormLogin',

  data() {
    return {
      form: {
        identifier: '',
        password: '',
      },
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.form,
        })
        this.$toast.success('Login realizado com sucesso!', {
          duration: 2000,
        })
      } catch (error) {
        console.log(error)
        this.$toast.error('Algo deu errado, tente novamente!', {
          duration: 4000,
        })
      }
    },
  },
}
</script>
