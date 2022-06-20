export default ({ $config }) => {
  return {
    httpEndpoint: `${$config.baseURL}/graphql`,
  }
}
