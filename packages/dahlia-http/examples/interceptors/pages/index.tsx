import React, { useState, useEffect } from 'react'

import { createStore, observe } from 'dahlia-store'

// import { config, request } from 'dahlia-http'
import { config, request, useFetch, useUpdate } from '../src'
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
const store = createStore({
  id: 1,
  setId() {
    store.id++
  },
})

setTimeout(() => {
  store.setId()
}, 3000)

const AppFetch = observe(() => {
  const { loading, data, error, refetch } = useFetch(`/todos/${store.id}`, [store.id])

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  console.log('render appp.....')

  return (
    <div className="App">
      count: {store.id}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => refetch('/todos/2')}>refetch</button>
    </div>
  )
})

const AppUpdate = () => {
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
      <AppUpdate />
    </div>
  )
}

export default App
