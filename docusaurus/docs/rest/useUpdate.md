---
id: useUpdate
title: useUpdate
sidebar_label: useUpdate
---

```jsx
import React from 'react'
import { useUpdate } from 'dahlia/rest'

export default () => {
  const [addTodo, { loading, data, error }] = useUpdate('/todos')

  return (
    <div className="App">
      <button onClick={() => addTodo({ title: 'new TODO' })}>
        {loading === undefined && 'Add Todo'}
        {loading !== undefined && (loading ? 'loading...' : ' Added')}
      </button>

      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

```