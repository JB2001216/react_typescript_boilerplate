import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, routerStore } from 'corolla'

const Home = () => (
  <div className="home">
    <br />
    <div>Url Params</div>
    <Link to="/users/Jordan">Jordan</Link>
    <br />
    <Link to="/users/James">James</Link>
  </div>
)

const User = () => {
  const params = routerStore.useStore(S => S.params)
  return (
    <div className="user">
      <h1>Hey, I am {params.name} </h1>
      <Link to="/users/Jordan">Jordan</Link>
      <br />
      <Link to="/users/James">James</Link>
    </div>
  )
}
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/users/:name',
    component: User,
  },
]

const App = () => <Router routes={routes} />

ReactDOM.render(<App />, document.getElementById('root'))
