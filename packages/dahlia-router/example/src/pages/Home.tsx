import React, { useEffect, Suspense, lazy } from 'react'
import { Link } from '../src/index'

const Test = lazy(() => import('./Test'))

export default () => {
  console.log('home....')
  useEffect(() => {
    console.log('mouted....')
  }, [])
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <h1>Home</h1>
      <Suspense fallback="loading....">
        <Test />
      </Suspense>
    </div>
  )
}
