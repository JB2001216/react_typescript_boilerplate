import React from 'react'
import { useQuery } from 'dahlia/graphql'

const GET_USER = `
  query User {
    userById(_id: "57bb44dd21d2befb7ca3f010") {
      name
      gender
      age
    }
  }
`

export default () => {
  const { loading, data, error } = useQuery(GET_USER)

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
