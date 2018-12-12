# dahlia

[![npm](https://img.shields.io/npm/v/dahlia.svg)](https://www.npmjs.com/package/dahlia) [![Build Status](https://travis-ci.org/forsigner/dahlia.svg?branch=master)](https://travis-ci.org/forsigner/dahlia) [](https://coveralls.io/github/forsigner/dahlia?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/dahlia.svg)](https://github.com/forsigner/dahlia/blob/master/LICENSE)

> An opinionated React Framework for building modern web applications.

React hooks、GraphQL、Restful、TypeScript... If You like these techniques, you can try `Dahlia`, It will make you comfortable and efficient。

## Installation

```sh
yarn add dahlia
```

## Quick Start

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { gql, useQuery } from 'dahlia'

dahlia.init({
  graphql: {
    endpoint: 'https://graphql-compose.herokuapp.com/user',
  },
})

const GET_USER = gql`
  query User {
    userById(_id: "57bb44dd21d2befb7ca3f010") {
      name
      gender
      age
    }
  }
`

const App = () => {
  const { loading, data, error } = useQuery(GET_USER)

  if (loading) return <div>loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
