<template>
  <div>
    <hr />
    <nav
      id="nav"
      class="bg-white shadow-md shadow-gray-500 flex items-center justify-center"
    >
      <p v-if="$fetchState.pending">Carregando...</p>
      <p
        v-else-if="$fetchState.error"
        class="text-center p-4 text-red-800 flex gap-2"
      >
        <Icon name="x-circle" color="#981B1B" />
        Falha ao carregar as categorias, atualize a página!
      </p>

      <ul v-else class="flex gap-8 items-center justify-center p-4">
        <nuxt-link
          v-for="(menu, index) in menus"
          :key="index"
          :to="{
            name: 'categorias-slug',
            params: { slug: menu.attributes.slug },
          }"
          class="cursor-pointer text-gray-700 hover:text-red-500 transition duration-150 ease-in-out relative"
          v-text="menu.attributes.name"
        ></nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { categoriesQuery } from '@/graphql/querys/categories'
export default {
  name: 'AppMenu',

  data: () => ({
    menus: [],
  }),

  async fetch() {
    const { data } = await this.$apollo.query({
      query: categoriesQuery(),
    })

    this.menus = data?.categories?.data
  },
}
</script>

<style scoped>
#nav .nuxt-link-exact-active {
  color: #ef4444;
}

#nav .nuxt-link-exact-active::after {
  content: '';
  height: 3px;
  width: 100%;
  background: red;
  bottom: -17px;
  right: 0;
  left: 0;
  position: absolute;
  border-radius: 4px;
}
</style>
