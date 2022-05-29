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
          v-model="form.email"
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

      <div class="flex justify-between">
        <span class="text-sm text-red-500 hover:underline cursor-pointer"
          >Esqueceu sua senha?</span
        >
      </div>
      <div>
        <Button label="Entrar" />
        <div
          class="flex gap-6 justify-center text-white w-full bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 py-3"
        >
          <img
            class="h-5 cursor-pointer"
            src="https://i.imgur.com/arC60SB.png"
            alt=""
          />
          <button>Entrar com o Google</button>
        </div>
      </div>
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
        email: '',
        password: '',
      },
    }
  },

  methods: {
    login() {
      console.log(this.form)
    },
  },
}
</script>
