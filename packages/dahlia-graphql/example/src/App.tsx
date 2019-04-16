import React, { useState, useEffect } from 'react'
import gql from 'gql-tag'

import { config, query, useQuery, useMutate } from './src'

config({ endpoint: 'https://graphql-compose.herokuapp.com/user' })

const GET_USER = gql`
  query User {
    userById(_id: "57bb44dd21d2befb7ca3f010") {
      name
      gender
      age
    }
  }
`
const QueryApp = () => {
  const [data, setData] = useState()
  useEffect(() => {
    async function queryData() {
      const res = await query(GET_USER)
      setData(res)
    }
    queryData()
  }, [])

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

const UseQueryApp = () => {
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
const UseMutateApp = () => {
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

export default () => (
  <div>
    <QueryApp />
    <UseQueryApp />
    <UseMutateApp />
  </div>
)
