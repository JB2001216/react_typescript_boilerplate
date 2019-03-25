import { Config } from 'dahlia'
import { routes } from './routes'

export const config: Config = {
  routes,
  rest: {
    endpoint: '/',
  },
  graphql: {
    endpoint: '/',
  },
  root: '#root',
}
