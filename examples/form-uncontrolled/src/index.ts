import Dahlia from 'dahlia'
import { routes } from './routes'

Dahlia.bootstrap({
  graphql: {
    endpoint: 'https://graphql-compose.herokuapp.com/user',
  },
  routes,
  selector: '#root',
})
