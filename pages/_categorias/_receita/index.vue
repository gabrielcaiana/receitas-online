<template>
  <section class="w-5/6 m-auto py-10">
    <MoleculesEmptyState
      v-if="!recipe"
      label="A receita não existe, pesquisa por uma nova receita!"
    />

    <template v-else>
      <div class="flex justify-center items-center relative">
        <AtomsTitle align-center :title="recipe.name" />
        <div v-if="$auth.loggedIn" class="absolute right-0 cursor-pointer flex gap-2 items-center" @click="toggleLiked">
          <AtomsIcon v-show="likedRecipe" name="heart" size="32" background="#999" />
          <AtomsIcon v-show="!likedRecipe" name="heart" size="32" background="#ef4444" />
          <span v-text="likedRecipe ? 'Descurtir' : 'Curtir'"></span>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 mt-10">
        <MoleculesRecipeCover :cover="recipe.img" :name="recipe.name" />
        <div class="bg-white p-10 rounded-md">
          <div>
            <div class="flex gap-10">
              <MoleculesRecipeLikes :likes="likes" />
              <MoleculesRecipeDuration :duration="recipe.duration" />
              <MoleculesRecipePortions :portions="recipe.portions" />
              <MoleculesRecipeAuthor :author="author.username" />
            </div>
            <AtomsDivider />

            <MoleculesRecipeDescription :description="recipe.description" />
          </div>

          <AtomsDivider />

          <div class="grid grid-cols-2 gap-4">
            <MoleculesRecipeIngredients :ingredients="recipe.ingredients" />
            <MoleculesRecipeSteps :steps="recipe.steps" />
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  name: 'RecipePage',

  async asyncData({ $strapiApi, $auth, params }) {
    let favorites 
    const { recipe } = await $strapiApi.recipesBySlug(params.receita)

    if($auth.loggedIn) {
      const id = $auth.user.id
      favorites = await $strapiApi.recipesFavorites(id)
    }

    return {
      recipe,
      author: recipe.author?.data?.attributes,
      favorites: favorites?.recipes
    }
  },

  data() {
    return {
      likedRecipe: false,
      likes: 0
    }
  },

  head() {
    return {
      title: this.recipe?.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.recipe?.description,
        },
      ],
    }
  },

  computed: {
    isLiked() {
      return this.favorites?.some(recipe => recipe.id === this.recipe.id)
    }
  },

  mounted() {
    this.likedRecipe = this.isLiked
    this.likes = this.recipe.likes
  },

  methods: {
    toggleLiked() {
      if(this.likedRecipe) {
        this.unlike()
      } else {
        this.like()
      }
    },

    like() {
      const favorites = this.favorites.map(item => item.id)
      favorites.push(this.recipe.id)
      this.updateLikes(favorites, true)
      this.likedRecipe = true
    },

    unlike() {
      const index = this.favorites.findIndex(item => item.id === this.recipe.id)
      const favorites = this.favorites.map(item => item.id)
      favorites.splice(index, 1)
      this.updateLikes(favorites, false)
      this.likedRecipe = false
    },

    async updateLikes(items, like) {
      const favorites =  [...new Set(items)];
      
      const id = Number(this.recipe.id)
      const getLikes = await this.$strapiApi.recipeGetLikes(id)

      const updatelike =  like ?  getLikes.likes + 1 : getLikes.likes -1 

      this.$strapiApi.updateFavoriteRecipeUser({
        id: Number(this.recipe.id),
        idUser: this.$auth.user.id,
        favorites,
        likes: updatelike 
      })

      this.likes = updatelike
       this.$store.commit('user/SET_RECIPES_FAVORITES', favorites.length ) 
    }
  },
}
</script>
