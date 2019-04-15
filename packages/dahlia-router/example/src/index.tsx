import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, Routes, routerStore } from './src/index'

const Home = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <h1>Home</h1>
  </div>
)

const About = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <h1>About</h1>
  </div>
)

const User = () => {
  const { params } = routerStore
  return (
    <div>
      <h1>User Name: {params.name}</h1>
    </div>
  )
}

const NotFound = () => <div>404 not found</div>

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
  },
  {
    path: '**',
    component: NotFound,
  },
]

const App = () => <Router routes={routes} />

ReactDOM.render(<App />, document.getElementById('root'))
