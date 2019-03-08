# Dahlia http

> Fast Rest/GraphQL requests for React.

## Installation

```sh
yarn add dahlia-http
```

## Quick Start

```js
import React from 'react'
import ReactDOM from 'react-dom'
import gql from 'gql-tag'
import { config, useQuery, useFetch } from 'dahlia-http'

config({
  graphql: {
    endpoint: 'https://graphql-compose.herokuapp.com/user',
  },
  rest: {
    endpoint: 'https://jsonplaceholder.typicode.com',
  },
})

// query graphQL api data
const GET_USER = gql`
  query User {
    userById(_id: "57bb44dd21d2befb7ca3f010") {
      name
      gender
      age
    }
  }
`

const GraphQLApp = () => {
  const { loading, data, error, refetch } = useQuery(GET_USER)

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

// fetch restful api data
const RestApp = () => {
  const { loading, data, error } = useFetch('/todos/1')

  if (loading) return <div>loading....</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

const App = () => (
  <div>
    <GraphQLApp />
    <RestApp />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
```


Check on CodeSandbox: [useQuery & useFetch](https://codesandbox.io/s/935r1nqlzr)

## Api

## useQuery`

**`const { loading, data, error, refetch } = useQuery(query, variables, options)`**

获取服务端数据是一个非常通用的业务场景，这个一个重复而繁杂的工作，`useQuery` 把这个业务逻辑通用化了，通过 `useQuery`，你可以用最简单的方式获取数据，并且可以方便的处理加载状态和错误信息。

### Params

**`query: string`**

GraphQL 的 query 字符串，例如：

```js
{
  hero {
    name
  }
}
```

**`variables?: {[key: string]: any}`**

GraphQL 查询的变量，是一个普通的 JavaScript 对象，例如：

```js
{
  id: 1000
}
```

**`options?:TODO:`**

其他参数，是一个普通的 JavaScript 对象，例如:

```js
{
  headers: {
    token: '57bb44dd21d2befb7ca3f010'
  }
}
```

### Result

**`loading: boolean`**

请求状态，是否成功获取数据，对前端界面状态处理很有用。

**`data: TData`**

GraphQL 查询成功返回的数据对象，例如：

```js
{
  hero: {
    name: 'Cristiano Ronaldo'
  }
}
```

**`error: TError`**

请求发生错误时，返回的错误信息对象，例如：

```js
{
  error: {
    statusCode: 401,
    error: "Unauthorized",
    message: "未登录"
  }
}
```

**`refetch: (variables?: TVariables) => void`**

一个函数，可以让你重新发请求获取数据，比如你有一刷新按钮，点击重新获取数据，你就可以用 refetch 了。

## useMutate

**`const [mutateFn, { loading, data, error }] = useMutate(query)`**

### Params

**`query: string`**

GraphQL 的 query 字符串，例如：

```js
{
  hero {
    name
  }
}
```

### Result

#### Mutate function:

**`mutateFn: (variables?: Variables)`**

一个用来触发 mutate 的函数，例如：`addTodo({ title: 'one thing'})`。

#### Mutate result:

**`loading: boolean`**

请求状态，是否成功获取数据，对前端界面状态处理很有用。

**`data: TData`**

GraphQL mutate 成功返回的数据对象，例如：

```js
{
  hero: {
    name: 'Cristiano Ronaldo'
  }
}
```

**`error: TError`**

请求发生错误时，返回的错误信息对象，例如：

```js
{
  error: {
    statusCode: 401,
    error: "Unauthorized",
    message: "未登录"
  }
}
```

## useFetch

**`const { loading, data, error, refetch } = useFetch(url, options)`**

获取服务端数据是一个非常通用的业务场景，这个一个重复而繁杂的工作，`useQuery` 把这个业务逻辑通用化了，通过 `useQuery`，你可以用最简单的方式获取数据，并且可以方便的处理加载状态和错误信息。

### Params

**`url: string`** 请求的 URL。

**`options?: TOptions`**

- method (String) - HTTP method. 默认: `GET`
- body (Object, body types) - HTTP request body
- headers (Object, Headers) - 默认: {}

和 fetch 的异同：TODO:

### Result

**`loading: boolean`**

请求状态，是否成功获取数据，对前端界面状态处理很有用。

**`data: TData`**

GraphQL 查询成功返回的数据对象，例如：

```js
{
  hero: {
    name: 'Cristiano Ronaldo'
  }
}
```

**`error: TError`**

请求发生错误时，返回的错误信息对象，例如：

```js
{
  error: {
    statusCode: 401,
    error: "Unauthorized",
    message: "未登录"
  }
}
```

**`refetch: (variables?: TVariables) => void`**

一个函数，可以让你重新发请求获取数据，比如你有一刷新按钮，点击重新获取数据，你就可以用 refetch 了。

## useUpdate

**`const [updateFn, { loading, data, error }] = useUpdate(url, options)`**

### Params

**`url: string`** 请求的 URL。

**`options?: Options`**

- method (String) - HTTP method. 默认: `GET`
- body (Object, body types) - HTTP request body
- headers (Object, Headers) - 默认: {}

和 fetch 的异同：TODO:

### Result

#### Update function

**`updateFn: (options: Options)`**

一个用来触发 update 的函数，例如：`addTodo({ title: 'one thing'})`。

#### Update result

**`loading: boolean`**

请求状态，是否成功获取数据，对前端界面状态处理很有用。

**`data: TData`**

GraphQL 查询成功返回的数据对象，例如：

```js
{
  hero: {
    name: 'Cristiano Ronaldo'
  }
}
```

**`error: TError`**

请求发生错误时，返回的错误信息对象，例如：

```js
{
  error: {
    statusCode: 401,
    error: "Unauthorized",
    message: "未登录"
  }
}
```

## License

[MIT License](https://github.com/forsigner/dahlia-http/blob/master/LICENSE)
