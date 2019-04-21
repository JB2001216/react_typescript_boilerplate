# dahlia-router

## Installation

```sh
yarn add dahlia-router
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from 'dahlia-router'

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

const NotFound = () => (
  <div>
    404 not found
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
    path: '**',
    component: NotFound,
  },
]

const App = () => <Router routes={routes} />

ReactDOM.render(<App />, document.getElementById('root'))
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
