<template>
  <ValidationObserver ref="form">
    <form class="mt-6" @submit.prevent="login">
      <div>
        <span class="text-sm text-gray-500">Bem vindo de volta</span>
        <h1 class="text-2xl font-bold text-gray-700">
          Faça o login para acessar sua conta
        </h1>
      </div>

      <div class="my-5 flex flex-col gap-4">
        <ValidationProvider
          v-slot="{ errors }"
          mode="passive"
          name="email"
          rules="required|email"
        >
          <MoleculesInputText
            v-model="form.identifier"
            type="text"
            name="email"
            label="Email"
            placeholder="Digite seu email"
            :errors="errors"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          mode="passive"
          rules="required"
          name="senha"
        >
          <MoleculesInputPassword
            v-model="form.password"
            label="Senha"
            placeholder="Digite uma senha"
            :errors="errors"
          />
        </ValidationProvider>
      </div>

      <AtomsButton primary label="Entrar" />
    </form>

    <p class="mt-8 text-gray-500">
      Ainda não tem uma conta?
      <nuxt-link to="/register" class="cursor-pointer text-sm text-red-500">
        criar agora</nuxt-link
      >
    </p>
  </ValidationObserver>
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
    login() {
      this.$refs.form.validate().then(async (success) => {
        if (success) {
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
        } else {
          this.$toast.error('Preencha os campos em destaque corretamente!', {
            duration: 4000,
          })
        }
      })
    },
  },
}
</script>
