import { gql } from 'graphql-tag'

export const createRecipeMutation = ({
  name,
  duration,
  portions,
  img,
  description,
  ingredients,
  steps,
  category,
  author,
}) => gql`
  mutation {
    createRecipe(
      data: {
        name: "${name}"
        duration: ${duration}
        portions: ${portions}
        img: "${img}"
        description: "${description}"
        ingredients: "${ingredients}"
        steps: "${steps}"
        category: ${category}
        author: ${author}
      }
    ) {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`
