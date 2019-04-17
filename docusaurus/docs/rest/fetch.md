---
id: fetch
title: fetch
sidebar_label: fetch
---

```tsx
import React, { useState, useEffect } from 'react'
import { fetch } from 'dahlia/rest'

export default () => {
  const [todo, setTodo] = useState()

  useEffect(() => {
    async function loadTodo() {
      const res = await fetch('/todos/1')
      setTodo(res)
    }

    loadTodo()
  }, [])

  return <pre className="App">{JSON.stringify(todo, null, 2)}</pre>
}

```