import { gql } from 'graphql-tag'

export const recipesQuery = (page = 1, pageSize = 3) => gql`
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
          slug

          category {
            data {
              id
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
          slug
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
export const recipesBySlugQuery = (slug) => gql`
  {
    recipes(
      filters: {
        slug: {
            eq: "${slug}"
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
          description
          ingredients
          steps
          likes
          slug
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
          slug
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
