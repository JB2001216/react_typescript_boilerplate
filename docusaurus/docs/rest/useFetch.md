---
id: useFetch
title: 获取数据 (useFetch)
sidebar_label: 获取数据 (useFetch)
---

以简单高效的方式获取和管理异步数据是 Dahlia的核心功能之一。接下来，你将学习如何通过 `useFetch` 获取数据并渲染成 UI。  

下面的实例假设你已经配置好 Rest client，如果不了解如何配置，请看 [配置 Rest](/docs/rest/config)。

## 使用 `useFetch`

```jsx
import React from 'react'
import { useFetch } from 'dahlia/rest'

export default () => {
  const { loading, data, error } = useFetch('/todos/1')

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

```