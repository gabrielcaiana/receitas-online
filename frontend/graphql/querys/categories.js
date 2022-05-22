import { gql } from 'graphql-tag'

export const categoriesQuery = () => gql`
  {
    categories {
      data {
        attributes {
          slug
          name
          img
        }
      }
    }
  }
`
