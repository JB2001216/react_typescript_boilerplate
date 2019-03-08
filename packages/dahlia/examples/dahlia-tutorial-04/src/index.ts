import Dahlia from 'dahlia'
import { routes } from './routes'

Dahlia.bootstrap({
  rest: {
    endpoint: 'https://jsonplaceholder.typicode.com',
  },
  routes,
  selector: '#root',
})
