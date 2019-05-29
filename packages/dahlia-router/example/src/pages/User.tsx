import React from 'react'
import { routerStore } from '../src/index'

export default () => {
  const { params } = routerStore
  return (
    <div>
      <h1>User Name: {params.name}</h1>
    </div>
  )
}
