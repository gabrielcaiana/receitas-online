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

    <ValidationObserver ref="form">
      <form class="p-6 flex flex-col gap-6" @submit.prevent="create">
        <div class="flex gap-3">
          <ValidationProvider
            v-slot="{ errors }"
            name="nome"
            mode="passive"
            rules="required|min:6"
            class="w-full"
          >
            <MoleculesInputText
              v-model="recipe.name"
              type="text"
              name="name"
              label="Nome"
              placeholder="Digite o nome da receita"
              :errors="errors"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="duration"
            mode="passive"
            rules="required|min:1"
            class="w-full"
          >
            <div class="relative">
              <MoleculesInputText
                v-model="recipe.duration"
                type="number"
                name="duration"
                label="Tempo de preparo"
                placeholder="Informe em minutos"
                :errors="errors"
              />
              <div
                class="flex items-center gap-1 absolute right-4 top-9 outline-none"
              >
                <AtomsIcon
                  name="clock"
                  color="#6b7280"
                  size="16"
                  class="mb-1"
                />
                <span
                  class="text-sm text-gray-500"
                  v-text="formatedTime(recipe.duration)"
                ></span>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="portions"
            mode="passive"
            rules="required|min:1"
            class="w-full"
          >
            <MoleculesInputText
              v-model="recipe.portions"
              type="number"
              name="portions"
              label="Porções"
              placeholder="Informe a quantidade de porções"
              :errors="errors"
            />
          </ValidationProvider>
        </div>

        <div class="flex gap-3">
          <ValidationProvider
            v-slot="{ errors }"
            name="img"
            mode="passive"
            rules="required|min:6"
            class="w-full"
          >
            <MoleculesInputText
              v-model="recipe.img"
              type="text"
              name="img"
              label="Imagem"
              placeholder="Digite a url da imagem"
              :errors="errors"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="category"
            mode="passive"
            rules="required"
            class="w-full"
          >
            <MoleculesInputSelect
              v-model="recipe.category"
              :options="options"
              label="Categorias"
              :errors="errors"
            />
          </ValidationProvider>
          {{ recipe.category }}
        </div>

        <ValidationProvider
          v-slot="{ errors }"
          name="description"
          mode="passive"
          rules="required|min:6"
        >
          <MoleculesTextarea
            v-model="recipe.description"
            :rows="5"
            type="text"
            name="img"
            label="Descrição"
            placeholder="Digite a descrição da receita"
            :errors="errors"
          />
        </ValidationProvider>

        <div class="flex flex-col items-end gap-3">
          <ValidationProvider
            v-for="(ingredient, index) in recipe.ingredients"
            v-slot="{ errors }"
            :key="`${index} ingrediente`"
            :name="`${ingredient}-${index}`"
            mode="passive"
            rules="required|min:6"
            class="w-full"
          >
            <MoleculesInputText
              v-model="recipe.ingredients[index]"
              type="text"
              :name="`${ingredient}-${index}`"
              :label="`Ingrediente ${index + 1}`"
              placeholder="Digite o ingrediente"
              :errors="errors"
            />
          </ValidationProvider>

          <div
            class="w-full flex justify-center gap-2 items-center text-gray-700 cursor-pointer"
            @click="addItem('ingredients')"
          >
            <span>Adicionar</span>
            <AtomsIcon name="plus" color="#ef4444" />
          </div>
        </div>

        <div class="flex flex-col items-end gap-3">
          <ValidationProvider
            v-for="(step, index) in recipe.steps"
            v-slot="{ errors }"
            :key="`${index} passo`"
            :name="`${step}-${step}`"
            mode="passive"
            rules="required|min:6"
            class="w-full"
          >
            <MoleculesInputText
              v-model="recipe.steps[index]"
              type="text"
              :name="`${step}-${step}`"
              :label="`Passo ${index + 1}`"
              placeholder="Digite o passo"
              :errors="errors"
            />
          </ValidationProvider>

          <div
            class="w-full flex justify-center gap-2 items-center text-gray-700 cursor-pointer"
            @click="addItem('steps')"
          >
            <span>Adicionar</span>
            <AtomsIcon name="plus" color="#ef4444" />
          </div>
        </div>
        <AtomsButton label="Finalizar cadastro" primary />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { formatedTime } from '~/utils/formatedTime'
export default {
  name: 'RecipeCreate',

  props: {
    options: {
      type: Array,
      required: true,
    },
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
        category: null,
      }),
    },
  },

  methods: {
    formatedTime,
    addItem(item) {
      if (this.recipe[item] === null) this.recipe[item] = []
      this.recipe[item].push('')
    },

    create() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          console.log(this.recipe)
        } else {
          console.log('Falhou')
        }
      })
    },
  },
}
</script>
