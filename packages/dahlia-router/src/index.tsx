import Router from './components/Router'
import Link from './components/Link'
import navigate from './navigate'
import routerStore from './routerStore'

interface Route {
  path?: string
  component?: any
  children?: Routes
}
export type Routes = Route[]

export { Router, Link, navigate, routerStore }
