<template>
  <div class="min-h-screen bg-gray-100">
    <div v-if="logged">
      <OrganismsHeader />
      <OrganismsMenu />
      <main>
        <transition name="slide" mode="out-in">
          <nuxt />
        </transition>
      </main>
      <OrganismsFooter v-if="logged" />
    </div>

    <div v-else>
      <main>
        <transition name="slide" mode="out-in">
          <nuxt />
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',

  data() {
    return {
      logged: true,
    }
  },
}
</script>
