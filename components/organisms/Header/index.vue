<template>
  <div class="w-auto bg-white h-20 flex items-center px-10">
    <div class="flex justify-between items-center flex-auto gap-64">
      <AtomsLogo />
      <MoleculesInputSearch />

      <div v-if="$auth.loggedIn" class="flex gap-3 items-center cursor-pointer">
        <nuxt-link :to="{ name: 'user-recipe-favorites' }">
          <span
            title="Receitas favoritas"
            class="bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out p-3 rounded-full h-4 w-4 flex items-center justify-center text-white font-bold text-sm"
            v-text="favorites"
          ></span>
        </nuxt-link>

        <MoleculesAvatar :username="$auth.user.username" />
      </div>

      <div v-else class="flex gap-2 w-64">
        <AtomsButton
          primary
          type="reset"
          label="Entrar"
          @click.native="$router.push('/login')"
        />

        <AtomsButton
          outlined
          type="reset"
          label="Cadastre-se"
          @click.native="$router.push('/register')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',

  computed: {
    favorites() {
      return this.$store.getters['user/getRecipesFavorites']
    },
  },

  mounted() {
    this.countFavorites()
  },

  methods: {
    async countFavorites() {
      try {
        const id = this.$auth.user.id
        const { recipes } = await this.$strapiApi.recipesFavorites(id)
        this.$store.commit('user/SET_RECIPES_FAVORITES', recipes?.length ?? 0)  
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
