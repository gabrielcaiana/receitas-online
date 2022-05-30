<template>
  <div class="w-auto bg-white h-20 flex items-center px-10">
    <div class="flex justify-between items-center flex-auto gap-64">
      <AtomsLogo />
      <MoleculesInputSearch />

      <MoleculesAvatar v-if="$auth.loggedIn" :username="$auth.user.username" />
      <div v-else class="flex gap-2 w-64">
        <AtomsButton
          primary
          type="reset"
          label="Entrar"
          @click.native="$router.push('/login')"
        />

        <AtomsButton
          outlined
          type="reset"
          label="Cadastre-se"
          @click.native="$router.push('/register')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
