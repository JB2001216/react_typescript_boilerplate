import React from 'react'
import { routerStore } from 'dahlia/router'
import Nav from '@components/Nav'

const User = () => {
  const { params } = routerStore
  return (
    <div className="user">
      <Nav />
      <h1>Hey, I am {params.name} </h1>
    </div>
  )
}

export default User
