<template>
  <div class="bg-white shadow-md shadow-gray-500">
    <hr />

    <p v-if="$fetchState.pending">Carregando...</p>
    <p v-else-if="$fetchState.error">Falha ao carregar as categorias</p>

    <ul v-else class="flex gap-8 items-center justify-center p-4">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="cursor-pointer text-gray-700 hover:text-red-500 transition duration-150 ease-in-out"
        v-text="menu.attributes.name"
      ></li>
    </ul>
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
    const client = this.$apollo.getClient()

    const { data } = await client.query({
      query: categoriesQuery(),
    })

    this.menus = data?.categories?.data
  },
}
</script>
