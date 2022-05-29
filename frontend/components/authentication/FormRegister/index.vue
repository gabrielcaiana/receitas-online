<template>
  <div>
    <form class="mt-6">
      <div>
        <span class="text-sm text-gray-500">Vamos criar sua conta?</span>
        <h1 class="text-2xl font-bold text-gray-700">
          Preencha o formulário abaixo
        </h1>
      </div>

      <div class="my-5">
        <ReusableInputText
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome completo"
          class="mb-4"
        />
        <ReusableInputText
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          class="mb-4"
        />
        <ReusableInputPassword
          class="mb-4"
          label="Senha"
          placeholder="Digite uma senha"
        />
        <ReusableInputPassword
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
}
</script>
