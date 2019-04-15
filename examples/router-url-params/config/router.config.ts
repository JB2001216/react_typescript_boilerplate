import { Routes } from 'dahlia/router'
import Index from '../pages/index'
import User from '../pages/user'

const routes: Routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/users/:name',
    component: User,
  },
]

export default routes
