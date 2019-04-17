---
id: config
title: 配置 endpoint
sidebar_label: 配置 endpoint
---


## 使用配置文件
在使用 GraphQL 获取数据之前，你需要配置 GraphQL 的 endpoint，配置类似：

```js
// config/config.default.ts

const config = {
  graphql: {
    endpoint: 'https://graphql-compose.herokuapp.com/user',
  },
}

export default config
```


## 使用动态配置

你也可以动态配置 endpoint：

```js
import { config } from 'dahlia/rest'

config({ endpoint: 'https://graphql-compose.herokuapp.com/user' })
```