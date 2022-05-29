<template>
  <div class="w-auto bg-white h-20 flex items-center px-10">
    <div class="flex justify-between items-center flex-auto gap-64">
      <Logo />
      <InputSearch />

      <div class="w-24">
        <Button label="Entrar" @click.native="$router.push('/login')" />
      </div>
      <!-- <Avatar /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
