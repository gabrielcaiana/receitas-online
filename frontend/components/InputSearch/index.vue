<template>
  <div class="flex-auto relative">
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <Icon name="search" color="#333333" />
      </div>
      <input
        id="default-search"
        v-model="search"
        type="search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        placeholder="Pesquise por uma receita"
        required
        @input="processChange"
      />
    </div>

    <div
      v-if="search.length !== 0"
      class="w-full rounded-lg shadow-md shadow-gray-500 p-6 absolute bg-white z-10"
    >
      <ul v-if="search" class="flex flex-col">
        <nuxt-link
          v-for="recipe in recipes"
          :key="recipe.id"
          :to="{
            name: 'categorias-receita',
            params: {
              categorias: recipe.attributes.category.data.attributes.slug,
              receita: recipe.id,
            },
          }"
          class="py-2 text-gray-500 cursor-pointer hover:text-red-500 transition duration-300 ease-in-out"
          @click.native="search = ''"
          v-text="recipe.attributes.name"
        >
        </nuxt-link>
      </ul>

      <p v-if="!recipes.length" class="text-gray-500">
        Nenhuma receita encontrada
      </p>
    </div>
  </div>
</template>

<script>
import { recipeSearchQuery } from '@/graphql/querys/recipes'
import { debounce } from '@/utils/debounce'

export default {
  name: 'AppInputSearch',

  data() {
    return {
      search: '',
      recipes: '',
    }
  },

  computed: {
    processChange() {
      return debounce(() => this.filteredRecipe())
    },
  },

  methods: {
    debounce,
    async filteredRecipe() {
      try {
        const client = this.$apollo.getClient()
        const { data } = await client.query({
          query: recipeSearchQuery(this.search),
        })

        this.recipes = data.recipes.data
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
