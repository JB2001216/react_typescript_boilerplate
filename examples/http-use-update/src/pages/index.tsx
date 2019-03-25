import React from 'react'

import { config, useUpdate } from './src'

config({
  rest: {
    endpoint: 'https://jsonplaceholder.typicode.com',
  },
})

const App = () => {
  const [addTodo, { loading, data, error }] = useUpdate('/todos/10')

  return (
    <div className="App">
      <button onClick={() => addTodo()}>
        {loading === undefined && 'Add Todo'}
        {loading !== undefined && (loading ? 'loading...' : ' Added')}
      </button>

      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default App
