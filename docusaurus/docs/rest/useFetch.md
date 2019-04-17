---
id: useFetch
title: useFetch
sidebar_label: useFetch
---

```tsx
import React from 'react'
import { useFetch } from 'dahlia/rest'

export default () => {
  const { loading, data, error } = useFetch('/todos/1')

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

```