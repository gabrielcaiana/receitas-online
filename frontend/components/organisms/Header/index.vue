<template>
  <div class="w-auto bg-white h-20 flex items-center px-10">
    <div class="flex justify-between items-center flex-auto gap-64">
      <AtomsLogo />
      <MoleculesInputSearch />

      <div class="w-24">
        <AtomsButton label="Entrar" @click.native="$router.push('/login')" />
      </div>
      <!-- <MoleculesAvatar /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
