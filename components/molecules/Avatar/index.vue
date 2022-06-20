<template>
  <div class="relative">
    <button
      class="flex items-center w-full py-2 mt-2 text-sm font-semibold text-left rounded-lg md:w-auto md:inline md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      @click="open = !open"
    >
      <span v-text="username"></span>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        :class="{ 'rotate-180': open, 'rotate-0': !open }"
        class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      v-show="open"
      class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 bg-white z-10"
    >
      <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
        <nuxt-link
          class="block px-4 py-2 mt-2 text-sm font-semibold bg-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/user/recipe/favorites"
          @click.native="open = !open"
          >Receitas favoritas</nuxt-link
        >

        <nuxt-link
          class="block px-4 py-2 mt-2 text-sm font-semibold bg-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/user"
          @click.native="open = !open"
          >Perfil</nuxt-link
        >

        <nuxt-link
          class="block px-4 py-2 mt-2 text-sm font-semibold bg-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/"
          @click.native="logout"
          >Sair</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',

  props: {
    username: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      open: false,
    }
  },

  methods: {
    logout() {
      this.$auth.logout()
      this.$store.commit('user/SET_TOKEN', null)
    },
  },
}
</script>
