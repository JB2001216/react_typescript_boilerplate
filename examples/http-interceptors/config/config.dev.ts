import { Config } from 'dahlia'
const config: Partial<Config> = {
  rest: {
    endpoint: 'https://jsonplaceholder.typicode.com',
  },
  graphql: {
    endpoint: '/',
  },
  root: '#root',
}
export default config
