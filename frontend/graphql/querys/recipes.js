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

export const recipesByCategorieQuery = (slug) => gql`
  {
    recipes(
      filters: {
        category: {
          slug: {
            eq: "${slug}"
          }
        }
      }
    ) {
      data {
        id
        attributes {
          name
          duration
          portions
          img
          likes,
          category {
            data {
              attributes
              {
                name
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`
