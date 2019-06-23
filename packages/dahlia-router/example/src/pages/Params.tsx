import React from 'react'
import { routerStore } from '../src/index'

const Parmas = () => {
  const { params } = routerStore
  return (
    <div>
      <h1> {JSON.stringify(params, null, 2)}</h1>
    </div>
  )
}

export default Parmas
