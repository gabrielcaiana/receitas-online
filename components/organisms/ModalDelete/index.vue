<template>
  <div
    v-if="show"
    class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
  >
    <div class="absolute bg-black opacity-30 inset-0 z-0"></div>
    <div
      class="w-96 p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-16 h-16 flex items-center text-red-500 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>

        <h2 class="text-xl font-bold pt-4">Você deseja excluir a receita:</h2>
        <p
          class="text-red-500 font-bold italic pb-4"
          v-text="recipe.attributes.name"
        ></p>
        <p class="text-sm text-gray-500">
          Ao excluir não será possível recupera-la novamente<br />
          deseja continuar ?
        </p>
      </div>

      <div class="flex gap-2 mt-6">
        <AtomsButton outlined label="Cancelar" @click="$emit('close')" />
        <AtomsButton
          primary
          label="Excluir"
          @click="$emit('delete', recipe.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalDelete',

  props: {
    show: {
      type: Boolean,
      default: false,
    },

    recipe: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
