import React, { FC } from 'react'
import { routerStore } from '../src/index'

const User: FC = ({ children }) => {
  const { params } = routerStore
  console.log('params:', params)
  return (
    <div>
      <h1>User Name: {params.name}</h1>
      {children}
    </div>
  )
}

export default User
