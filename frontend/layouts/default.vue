<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex">
      <div class="flex-auto">
        <Header />
        <Menu />
        <main class="p-10 gap-10">
          <nuxt />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
}
</script>
