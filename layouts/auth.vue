<template>
  <div class="min-h-screen bg-gray-100">
    <main>
      <transition name="slide" mode="out-in">
        <nuxt />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppLayoutAuth',
}
</script>
