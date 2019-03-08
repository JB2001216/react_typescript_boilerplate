import React, { useState, useEffect } from 'react'

import { config, request } from './src'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

config({
  rest: {
    endpoint: 'https://jsonplaceholder.typicode.com',
  },
})

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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
