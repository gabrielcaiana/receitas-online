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

          category {
            data {
              attributes {
                name
                slug
              }
            }
          }
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
          likes
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

export const recipeQuery = (id) => gql`
  {
    recipe(
      id: ${id}
    ) {
      data {
        id
        attributes {
          name
          duration
          portions
          img
          description
          ingredients
          steps
          likes
        }
      }
    }
  }
`
