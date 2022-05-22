import { gql } from 'graphql-tag'

export const recipesQuery = () => gql`
  {
    recipes {
      data {
        id
        attributes {
          name
          duration
          portions
          img
          description
          ingredients
          likes
        }
      }
    }
  }
`
