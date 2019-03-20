import React from 'react'

import { config, useFetch } from './src'

config({
  graphql: {
    endpoint: 'https://api.graph.cool/simple/v1/swapi',
  },
})

const App = () => {
  const { loading, data, error, refetch } = useFetch('/todos/1')

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <button onClick={() => refetch('/todos/2')}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
