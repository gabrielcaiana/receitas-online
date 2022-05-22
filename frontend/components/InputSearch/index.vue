<template>
  <div class="flex-auto">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >Pesquisar</label
    >
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <Icon name="search" color="#333333" />
      </div>
      <input
        id="default-search"
        type="search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        placeholder="Pesquise por uma receita"
        required
      />
      <Button label="Pesquisar" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInputSearch',
}
</script>
