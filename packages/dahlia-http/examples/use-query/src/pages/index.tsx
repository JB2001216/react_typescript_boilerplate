import React from 'react'
import gql from 'gql-tag'

import { config, useQuery } from './src'

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
  const { loading, data, error, refetch } = useQuery(GET_USER)

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <button onClick={() => refetch()}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
