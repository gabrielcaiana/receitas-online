import { gql } from 'graphql-tag'

export const createRecipeMutation = () => gql`
  mutation (
    $name: String!
    $duration: Int!
    $portions: Int!
    $img: String!
    $description: String!
    $ingredients: JSON!
    $steps: JSON!
    $category: ID!
    $author: ID!
  ) {
    createRecipe(
      data: {
        name: $name
        duration: $duration
        portions: $portions
        img: $img
        description: $description
        ingredients: $ingredients
        steps: $steps
        category: $category
        author: $author
      }
    ) {
      data {
        id
        attributes {
          name
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const updateRecipeMutation = () => gql`
  mutation (
    $id: ID!
    $name: String!
    $duration: Int!
    $portions: Int!
    $img: String!
    $description: String!
    $ingredients: JSON!
    $steps: JSON!
    $category: ID!
    $author: ID!
  ) {
    updateRecipe(
      id: $id
      data: {
        name: $name
        duration: $duration
        portions: $portions
        img: $img
        description: $description
        ingredients: $ingredients
        steps: $steps
        category: $category
        author: $author
      }
    ) {
      data {
        id
        attributes {
          name
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const deleteRecipeMutation = () => gql`
  mutation ($id: ID!) {
    deleteRecipe(id: $id) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`

export const favoriteRecipeMutation = () => gql`
  mutation ($id: ID!, $likes: Long!, $idUser: ID!, $favorites: [ID!]) {
    updateRecipe(id: $id, data: { likes: $likes }) {
      data {
        id
        attributes {
          likes
        }
      }
    }
    updateUsersPermissionsUser(id: $idUser, data: { favorites: $favorites }) {
      data {
        id
        attributes {
          favorites {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
