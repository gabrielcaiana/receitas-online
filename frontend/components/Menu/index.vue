<template>
  <div class="bg-white shadow-md shadow-gray-500">
    <hr />
    <ul class="flex gap-8 items-center justify-center p-4">
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
    try {
      const client = this.$apollo.getClient()

      const { data } = await client.query({
        query: categoriesQuery(),
      })

      this.menus = data?.categories?.data
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
