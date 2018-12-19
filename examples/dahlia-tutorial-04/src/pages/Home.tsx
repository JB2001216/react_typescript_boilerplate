import React from 'react'
import { useFetch } from 'dahlia'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

export const Home = () => {
  const { loading, data: users, error } = useFetch<User[]>('/users')

  if (loading) return <div>loading....</div>
  if (error) return <div>Error!</div>

  return (
    <div>
      <h2>User List: </h2>
      <ol>
        {users.map(user => (
          <li>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ol>
    </div>
  )
}
