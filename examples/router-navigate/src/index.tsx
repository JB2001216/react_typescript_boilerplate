import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, navigate } from './src'

function toAbout() {
  navigate('/about')
}

function toHome() {
  navigate('/home')
}

const Home = () => (
  <div className="home">
    <a href="#" onClick={toHome}>
      Home
    </a>
    <br />
    <a href="#" onClick={toAbout}>
      About
    </a>
    <h1>Home</h1>
  </div>
)

const About = () => (
  <div className="about">
    <a href="#" onClick={toHome}>
      Home
    </a>
    <br />
    <a href="#" onClick={toAbout}>
      About
    </a>
    <h1>About</h1>
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
]

const App = () => <Router routes={routes} />

ReactDOM.render(<App />, document.getElementById('root'))
