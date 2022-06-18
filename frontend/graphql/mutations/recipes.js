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
