
import React, { Fragment } from 'react'
import { Router, Link } from 'corolla'

import './index.scss'

const Home: React.SFC = () => (
  <Fragment>
    <h4>App Store</h4>
    <Link activeClassName="selected" to="/store/today">
      Taday
    </Link>
    <Link activeClassName="selected" to="/store/game">
      Game
    </Link>
    <Link activeClassName="selected" to="/store/app">
      App
    </Link>
  </Fragment>
)

const AppStore: React.SFC = ({ children }) => (
  <Fragment>
    <h4>App Store</h4>
    <Link activeClassName="selected" to="/store/today">
      Taday
    </Link>
    <Link activeClassName="selected" to="/store/game">
      Game
    </Link>
    <Link activeClassName="selected" to="/store/app">
      App
    </Link>
    {children}
  </Fragment>
)

const Today = () => (
  <div className="home">
    {Array(10)
      .fill('')
      .map((_, i) => `Today-${i}`)
      .map(i => (
        <div key={i}>{i}</div>
      ))}
  </div>
)

const Game = () => (
  <div className="about">
    {Array(10)
      .fill('')
      .map((_, i) => `Game-${i}`)
      .map(i => (
        <div key={i}>{i}</div>
      ))}
  </div>
)

const App = () => (
  <div className="contact">
    {Array(10)
      .fill('')
      .map((_, i) => `App-${i}`)
      .map(i => (
        <div key={i}>{i}</div>
      ))}
  </div>
)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/store',
    component: AppStore,
    children: [
      {
        path: '/today',
        component: Today,
      },
      {
        path: '/game',
        component: Game,
      },
      {
        path: '/app',
        component: App,
      },
    ],
  },
]

const Example: React.SFC = () => <Router routes={routes} />

export default Example
