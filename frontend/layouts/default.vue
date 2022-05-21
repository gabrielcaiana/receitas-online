<template>
  <div class="h-screen bg-gray-100">
    <div class="flex gap-10">
      <Sidebar />

      <main class="w-auto p-10">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
}
</script>
