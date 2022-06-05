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
        <MoleculesInputText
          v-model="form.username"
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome completo"
          class="mb-4"
        />
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
          class="mb-4"
          label="Senha"
          placeholder="Digite uma senha"
        />
        <!-- <MoleculesInputPassword
          v-model="form.confirmPassword"
          label="Confirmar senha"
          placeholder="Digite a mesma senha"
        /> -->
      </div>

      <AtomsButton class="mb-4" primary label="Criar conta" />
      <AtomsButton
        outlined
        type="reset"
        label="Voltar"
        @click.native="$router.go(-1)"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppFormRegister',

  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        // confirmPassword: '',
      },
    }
  },

  methods: {
    async register() {
      console.log(this.form)
      try {
        const { user } = await this.$strapiApi.register(this.form)

        if(user && user?.register?.jwt) {
          const { email, password } = this.form
          await this.$auth.loginWith('local', {
            data: { identifier: email, password},
          })

          this.form = null

          this.$toast.success('Conta cadastrada com sucesso!', {
            duration: 2000,
          })
          this.$router.push('/')
        }
      } catch(error) {
        console.log(error)

        this.$toast.error('Algo deu errado, tente novamente!', {
          duration: 4000,
        })
      }
    },
  },
}
</script>
