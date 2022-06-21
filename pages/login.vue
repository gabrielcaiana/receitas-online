<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center"
    :style="`
      background-image: url('${$config.baseURL}/uploads/large_bg_auth_373fd95897.jpeg?updated_at=2022-06-21T03:10:00.717Z')`"
  >
    <div class="flex justify-end">
      <div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
        <div class="w-full p-16">
          <AtomsLogo />
          <OrganismsAuthenticationFormLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  layout: 'auth',
  middleware: 'auth',

  head() {
    return {
      title: 'Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Faça login no receitas online e cadastre e salve centenas de receitas',
        },
      ],
    }
  },
}
</script>
