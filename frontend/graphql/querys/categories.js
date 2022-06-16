import { gql } from 'graphql-tag'

export const categoriesQuery = () => gql`
  {
    categories {
      data {
        id
        attributes {
          slug
          name
          img
          recipes {
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
      }
    }
  }
`
