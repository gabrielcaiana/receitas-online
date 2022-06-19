<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center"
    :style="`background-image: url('${$config.baseURL}/uploads/bg_auth_75cf4b14d5.jpeg')`"
  >
    <div class="flex justify-end">
      <div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
        <div class="w-full p-16">
          <AtomsLogo />
          <OrganismsAuthenticationFormRegister />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRegister',
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',

  head() {
    return {
      title: 'Cadastre-se',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Crie sua conta no receitas online agora mesmo',
        },
      ],
    }
  },
}
</script>
