<template>
  <div class="min-h-screen bg-gray-100">
    <OrganismsHeader />
    <OrganismsMenu />
    <main class="min-h-screen">
      <transition name="slide" mode="out-in">
        <nuxt />
      </transition>
    </main>
    <OrganismsFooter />
  </div>
</template>

<script>
export default {
  name: 'AppLayout',

  mounted() {
    if (this.$auth.loggedIn) {
      const token = this.$auth.strategy.token.get()
      this.$store.commit('user/SET_TOKEN', token)
    }
  },
}
</script>
