import React, { useState, useEffect } from 'react'

import { config, fetch, useFetch, useUpdate, fetcher } from './src'

config({
  endpoint: 'https://jsonplaceholder.typicode.com',
})

const FetchApp = () => {
  const [data, setData] = useState()
  async function fetchData() {
    const res = await fetch('/todos/1')
    setData(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <pre className="App">{JSON.stringify(data, null, 2)}</pre>
}

const UseFetchApp = () => {
  const { loading, data, error, refetch } = useFetch('/todos/1', { name: 'getTodo' })

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <button onClick={() => refetch('/todos/2')}>refetch</button>
      <button onClick={() => fetcher.getTodo.refetch('/todos/2')}>refetch with fetcher</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
const UseUpdateApp = () => {
  const [addTodo, { loading, data, error }] = useUpdate('/todos')

  return (
    <div className="App">
      <button onClick={() => addTodo({ body: { title: 'New TODO' } })}>
        {loading === undefined && 'Add Todo'}
        {loading !== undefined && (loading ? 'loading...' : ' Added')}
      </button>

      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default () => (
  <div>
    <FetchApp />
    <UseFetchApp />
    <UseUpdateApp />
  </div>
)
