import React from 'react'

import { Link, Router } from 'dahlia-router'

const Home = () => <div>Home</div>
const About = () => <div>About</div>

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
]

const App = () => (
  <div>
    router.
    <div>
      <Link to="/">home</Link>
    </div>
    <div>
      <Link to="/about">
        <div>about</div>
      </Link>
    </div>
    <div>
      <Router routes={routes} />
    </div>
  </div>
)

export default App
