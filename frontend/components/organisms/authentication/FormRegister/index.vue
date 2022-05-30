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
          v-model="form.name"
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
        <MoleculesInputPassword
          v-model="form.confirmPassword"
          label="Confirmar senha"
          placeholder="Digite a mesma senha"
        />
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
