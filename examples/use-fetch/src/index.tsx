import React from 'react'
import ReactDOM from 'react-dom'
import Dahlia, { useFetch } from 'dahlia'

Dahlia.init({
  rest: {
    endpoint: 'https://jsonplaceholder.typicode.com',
  },
})

const App = () => {
  const { loading, data, error } = useFetch('/todos/1')

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
