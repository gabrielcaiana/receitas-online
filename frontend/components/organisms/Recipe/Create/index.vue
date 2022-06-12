<template>
  <div
    class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
  >
    <header
      class="px-5 py-6 border-b border-gray-100 flex items-center justify-between"
    >
      <h2 class="font-semibold text-gray-800">
        Preencha o formulário para cadastrar a receita
      </h2>
    </header>

    <form>
      <p v-text="recipe.name"></p>
      <p v-text="recipe.duration"></p>
      <p v-text="recipe.portions"></p>
      <p v-text="recipe.img"></p>
      <p v-text="recipe.description"></p>
      <p v-text="recipe.ingredients"></p>
      <p v-text="recipe.steps"></p>
      <p v-text="recipe.category"></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RecipeCreate',

  props: {
    recipe: {
      type: Object,
      default: () => ({
        name: '',
        duration: 0,
        portions: 0,
        img: '',
        description: '',
        ingredients: [''],
        steps: [''],
        category: 1,
      }),
    },
  },
}
</script>
