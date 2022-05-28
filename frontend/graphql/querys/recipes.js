import { gql } from 'graphql-tag'

export const recipesQuery = (page = 2, pageSize = 2) => gql`
  {
    recipes(sort: "name", pagination: { page: ${page}, pageSize: ${pageSize} }) {
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
export const recipeSearchQuery = (term) => gql`
  {
    recipes(filters: { name: { contains: "${term}" } }) {
      data {
        id
        attributes {
          name
          category {
            data {
              id
              attributes
              {
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
