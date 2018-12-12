import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import dahlia from 'dahlia'

dahlia.init({
  graphql: {
    endpoint: 'https://graphql-compose.herokuapp.com/user',
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
