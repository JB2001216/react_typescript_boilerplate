import React from 'react'
import { useQuery } from 'dahlia/http'
import { gql } from 'dahlia'

interface UserMany {
  userMany: Array<{
    name: string
    gender: string
  }>
}

const GET_USER = gql`
  query Users {
    userMany {
      name
      gender
    }
  }
`

export default () => {
  const { loading, data, error } = useQuery<UserMany>(GET_USER)

  if (loading) return <div>loading....</div>
  if (error) return <div>Error!</div>
  if (!data) return null

  return (
    <div>
      <h2>User List: </h2>
      <ol>
        {data.userMany.map(user => (
          <li>
            <strong>{user.name}</strong> ({user.gender})
          </li>
        ))}
      </ol>
    </div>
  )
}
