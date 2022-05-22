<template>
  <div class="bg-white shadow-md shadow-gray-500">
    <hr />
    <ul class="flex gap-8 items-center justify-center p-4">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="cursor-pointer text-gray-700 hover:text-red-500 transition duration-150 ease-in-out"
        v-text="menu.name"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',

  data() {
    return {
      menus: [
        {
          name: 'Bolos e tortas',
        },
        {
          name: 'Carnes',
        },
        {
          name: 'Aves',
        },
        {
          name: 'Peixes e frutos do mar',
        },
        {
          name: 'Salada e molhos',
        },
        {
          name: 'Sopas',
        },
      ],
    }
  },
}
</script>
