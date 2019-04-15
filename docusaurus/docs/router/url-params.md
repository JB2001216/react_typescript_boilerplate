---
id: url-params
title: 路由参数
sidebar_label: 路由参数
---

首先，在路由配置使用参数，例如`/users/:name` :

```tsx
// config/router.config.ts

import { Routes } from 'dahlia/router'
import Index from '@pages/index'
import User from '@pages/user'

const routes: Routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/users/:name',
    component: User,
  },
]

export default routes
```

在组件中获取路由参数：

```tsx
import React from 'react'
import { routerStore } from 'dahlia/router'

const User = () => {
  const { params } = routerStore
  return (
    <div className="user">
      <h1>Hey, I am {params.name} </h1>
    </div>
  )
}

export default User
```
