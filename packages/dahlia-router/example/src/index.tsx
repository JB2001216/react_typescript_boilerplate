import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, Routes, intercept } from './src/index'

intercept((ctx, next) => {
  console.log(ctx)
  if (ctx.to === '/about') {
    return open('http://google.com')
  }
  next()
})

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
    path: '**',
    component: NotFound,
  },
]

const App = () => <Router routes={routes} />

ReactDOM.render(<App />, document.getElementById('root'))
