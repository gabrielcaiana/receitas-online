<template>
  <section class="antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full bg-gray-400">
      <div
        class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
      >
        <header
          class="px-5 py-6 border-b border-gray-100 flex items-center justify-between"
        >
          <h2 class="font-semibold text-gray-800" v-text="title"></h2>
          <div class="w-56">
            <AtomsButton
              label="Cadastrar nova receita"
              primary
              @click="$router.push({ name: 'user-recipe-create' })"
            />
          </div>
        </header>

        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Nome</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Tempo de preparo</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Porções</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Likes</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Publicada</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Atualizada</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Acões</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="recipe in recipes" :key="recipe.id">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">
                        {{ recipe.attributes.name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-gray-800">
                      {{ formatedTime(recipe.attributes.duration) }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-gray-800">
                      {{ recipe.attributes.portions }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-center font-medium text-gray-800">
                      {{ recipe.attributes.likes }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-center font-medium text-gray-800">
                      {{ shortDate(recipe.attributes.createdAt) }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-center font-medium text-gray-800">
                      {{ shortDate(recipe.attributes.updatedAt) }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div
                      class="text-center cursor-pointer flex gap-2 justify-center"
                    >
                      <nuxt-link
                        :to="{
                          name: 'user-recipe-edit-slug',
                          params: {
                            slug: recipe.attributes.slug,
                          },
                        }"
                      >
                        <AtomsIcon name="edit" color="#333333" />
                      </nuxt-link>
                      <AtomsIcon
                        name="trash"
                        color="#eF4444"
                        @click="openDeleteDialog(recipe)"
                      />

                      <OrganismsModalDelete
                        :show="showDialogDelete"
                        :recipe="recipeSelected"
                        @close="showDialogDelete = false"
                        @delete="deleteRecipe($event)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { formatedTime } from '~/utils/formatedTime'
import { shortDate } from '~/utils/shortDate'
export default {
  name: 'RecipeList',

  props: {
    recipes: {
      type: Array,
      default: () => [],
    },

    title: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      showDialogDelete: false,
      recipeSelected: null,
    }
  },

  methods: {
    formatedTime,
    shortDate,

    openDeleteDialog(recipe) {
      this.showDialogDelete = true
      this.recipeSelected = recipe
    },

    async deleteRecipe(id) {
      try {
        const response = await this.$strapiApi.deleteRecipe(Number(id))

        if (response) {
          const index = this.recipes.findIndex((recipe) => recipe.id === id)

          this.recipes.splice(index, 1)

          this.$toast.success('Receita deletada com sucesso!', {
            duration: 2000,
          })

          this.showDialogDelete = false
        }
      } catch (error) {
        console.log(error)
        this.$toast.error(error, {
          duration: 4000,
        })
      }
    },
  },
}
</script>
