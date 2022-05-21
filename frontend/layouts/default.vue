<template>
  <div class="h-screen bg-gray-100">
    <div class="flex">
      <!-- <Sidebar /> -->

      <div class="flex-auto">
        <Header />
        <main class="p-10 gap-10">
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
}
</script>
