import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Routes, Link } from './src/index'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import Params from './pages/Params'

import './index.css'

const NotFound = () => <div>404 not found</div>

const UserRoot = () => <div>User Root</div>

const routes: Routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/users/:name',
    component: User,
    children: [
      {
        path: '/',
        component: UserRoot,
      },
      {
        path: '/params/:id',
        component: Params,
      },
      {
        path: '/params/:id/edit',
        component: NotFound,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
]

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/users/jack">User</Link>
    <Link to="/users/jack/params/1">Params</Link>
    <Link to="/users/jack/params/1/edit">Edit</Link>
    <Router routes={routes} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
