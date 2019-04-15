import { Routes } from 'dahlia/router'
import Index from '@pages/index'
import Settings from '@pages/settings'
import Profile from '@pages/profile'
import Account from '@pages/account'

const routes: Routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/settings',
    component: Settings,
    children: [
      {
        path: '/profile',
        component: Profile,
      },
      {
        path: '/account',
        component: Account,
      },
    ],
  },
]

export default routes
