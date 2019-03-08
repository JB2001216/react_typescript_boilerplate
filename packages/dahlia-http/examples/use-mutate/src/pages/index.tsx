import React from 'react'
import gql from 'gql-tag'
import { config, useMutate } from './src'

config({
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
  const [addTodo, { loading, data, error }] = useMutate(GET_USER)

  return (
    <div className="App">
      <button onClick={() => addTodo({})}>
        {loading === undefined && 'Add Todo'}
        {loading !== undefined && (loading ? 'loading...' : ' Added')}
      </button>

      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default App
