import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from './src'

const Home = () => (
  <div className="home">
    <h1>Home</h1>
  </div>
)

const About = () => (
  <div className="about">
    <h1>About</h1>
  </div>
)

const Contact = () => (
  <div className="contact">
    <h1>Contact</h1>
  </div>
)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
]

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
    <br />
    <Link to="/contact">Contact</Link>
    <div>
      <Router routes={routes} />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
