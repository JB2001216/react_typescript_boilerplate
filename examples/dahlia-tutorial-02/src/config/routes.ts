import { Routes } from 'dahlia/router'
import Home from '../pages/home'
import About from '../pages/about'

const routes: Routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
]

export default routes
