import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Routes } from './src/index'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'

const NotFound = () => <div>404 not found</div>

const routes: Routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/users/:name',
    component: User
  },
  {
    path: '**',
    component: NotFound,
  },
]

const App = () => <Router routes={routes} />

ReactDOM.render(<App />, document.getElementById('root'))
