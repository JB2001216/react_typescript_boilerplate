import React, { useState, useEffect } from 'react'

// import { config, request } from 'dahlia-http'
import { config, request, useFetch } from '../src'
import Nav from '../components/Nav'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

config({
  rest: {
    endpoint: 'https://jsonplaceholder.typicode.com',
    interceptors: [
      {
        response: (data: any) => {
          return data.title
        },
      },
    ],
  },
})

const AppFetch = () => {
  const { loading, data, error, refetch } = useFetch(
    '/todos/2',
  )

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <button onClick={() => refetch('/todos/2')}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

const App = () => {
  const [data, update] = useState({})

  useEffect(() => {
    requestData()
  }, [])

  async function requestData() {
    const data = await request<Todo>('/todos/1')
    update(data)
    console.log('data:', data)
  }

  if (!data) return <pre>error!</pre>

  return (
    <div className="App">
      <Nav />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <AppFetch />
    </div>
  )
}

export default App
