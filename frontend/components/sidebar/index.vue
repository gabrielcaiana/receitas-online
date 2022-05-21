<template>
  <div class="w-64 p-10 h-screen bg-red-500">
    <Logo />

    <ul v-for="categorie in categories" :key="categorie.id" class="mt-8">
      <li
        class="text-white cursor-pointer hover:text-gray-200"
        v-text="categorie.name"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',

  data() {
    return {
      categories: [
        {
          name: 'item 1',
          id: 1,
        },

        {
          name: 'item 2',
          id: 2,
        },
      ],
    }
  },
}
</script>
