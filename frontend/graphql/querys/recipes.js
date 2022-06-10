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
          author {
            data {
              attributes {
                username
              }
            }
          }
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
          author {
            data {
              attributes {
                username
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
          author {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`
export const recipesByUserQuery = (id) => gql`
  {
    recipes(
      filters: {
        author: {
           id: {
            eq: "${id}"
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
          description
          ingredients
          steps
          likes
          slug
          author {
            data {
              attributes {
                username
              }
            }
          }
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
          author {
            data {
              attributes {
                username
              }
            }
          }
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
