import { gql } from 'graphql-tag'

export const registerUserMutation = ({ username, email, password }) => gql`
  mutation {
    register(
      input: {
        username:"${username}",
        email:"${email}",
        password:"${password}",
      }
    ) {
      jwt
       user {
        id
        username
        email
      }
    }
  }
`
