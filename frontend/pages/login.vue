<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center"
    style="
      background-image: url('https://www.teahub.io/photos/full/6-63195_food-wallpaper-foods-wallpaper-hd.jpg');
    "
  >
    <div class="flex justify-end">
      <div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
        <div class="w-full p-16">
          <Logo />
          <AuthenticationFormLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
}
</script>
