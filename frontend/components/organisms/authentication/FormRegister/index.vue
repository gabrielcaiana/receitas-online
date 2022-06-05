<template>
  <ValidationObserver ref="form">
    <form class="mt-6" @submit.prevent="register">
      <div>
        <span class="text-sm text-gray-500">Vamos criar sua conta?</span>
        <h1 class="text-2xl font-bold text-gray-700">
          Preencha o formulário abaixo
        </h1>
      </div>

      <div class="my-5 flex flex-col gap-4">
        <ValidationProvider
          v-slot="{ errors }"
          name="nome"
          mode="passive"
          rules="required|min:6"
        >
          <MoleculesInputText
            v-model="form.username"
            type="text"
            name="name"
            label="Nome"
            placeholder="Digite seu nome completo"
            :errors="errors"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          mode="passive"
          name="email"
          rules="required|email"
        >
          <MoleculesInputText
            v-model="form.email"
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
          rules="required|minmax:8,16|password:@confirm"
          name="senha"
        >
          <MoleculesInputPassword
            v-model="form.password"
            label="Senha"
            placeholder="Digite uma senha"
            :errors="errors"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          mode="passive"
          rules="required|minmax:8,16"
          name="confirm"
        >
          <MoleculesInputPassword
            v-model="form.confirmPassword"
            label="Confirme sua senha"
            placeholder="Digite a mesma senha"
            :errors="errors"
          />
        </ValidationProvider>
      </div>

      <AtomsButton class="mb-4" primary label="Criar conta" />
      <AtomsButton
        outlined
        type="reset"
        label="Voltar"
        @click.native="$router.go(-1)"
      />
    </form>
  </ValidationObserver>
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
        confirmPassword: '',
      },
    }
  },

  methods: {
    register() {
      this.$refs.form.validate().then(async (success) => {
        if (success) {
          try {
            const { user } = await this.$strapiApi.register(this.form)

            if (user && user?.register?.jwt) {
              const { email, password } = this.form
              await this.$auth.loginWith('local', {
                data: { identifier: email, password },
              })

              this.form = null

              this.$toast.success('Conta cadastrada com sucesso!', {
                duration: 2000,
              })
              this.$router.push('/')
            }
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
