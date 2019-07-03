import React, { Suspense, lazy } from 'react'

const Test = lazy(() => import('./Test'))

export default () => {
  return (
    <div>
      <h1>Home</h1>
      home content....
      <Suspense fallback="loading....">
        <Test />
      </Suspense>
    </div>
  )
}
