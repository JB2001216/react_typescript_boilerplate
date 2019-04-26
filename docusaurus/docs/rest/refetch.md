---
id: reFetch
title: 重新获取 (reFetch)
sidebar_label: 重新获取 (reFetch)
---

由于 Dahlia 推崇在组件内维护异步数据，但很多场景中，你需要更新异步数据，比如在 CRUD 功能中，新增、删除、修改、分页、筛选等功能都需要更新异步数据。`dahlia/rest` 提供了三中方式更新数据，三种方式可在不同业务场景中使用，这是`dahlia/rest`的重要功能之一，你应该仔细阅读并理解它的使用场景，使用这种方式管理异步数据，整个应用的状态将变得更加简单，代码量会成本的减少，相应的可维护性大大增加。

## 内部 refetch

这是最简单的重新获取数据的方式，通常，如果触发更新的动作和`useFetch`在统一组件内，可以使用这种方式。

```tsx
const Todos = () => {
  const { loading, data, error, refetch } = useFetch('/todos', {
    query: { _start: 0, _limit: 5 }, // first page
  })

  if (loading) return <span>loading...</span>
  if (error) return <span>error!</span>

  const getSecondPage = () => {
    refetch({
      query: { _start: 5, _limit: 5 }, // first page
    })
  }

  return (
    <div>
      <button onClick={getSecondPage}>Second Page</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
```

## 更新依赖 (deps)

通过更新依赖来重新获取数据，这也是常用的方式之一，因为在很多业务场景中，触发动作会在其他组件中，下面演示如何通过更新依赖触发数据更新：

首先，定义一个 store 用来存放依赖：

```tsx
// /store/todoStore.ts
const todoStore = createStore({
  params: {
    _start: 5,
    _limit: 5,
  },
  updateParams(params) {
    todoStore.params = params
  },
})
```

在组件中，使用依赖：

```tsx
import todoStore from '@store/todoStoreo'

const Todos = () => {
  const { params } = todoStore
  const { loading, data, error, refetch } = useFetch(
    '/todos',
    { query: params },
    [params],
  )

  if (loading) return <span>loading...</span>
  if (error) return <span>error!</span>

  const updatePage = () => {
    totoStore.updateParams({ _start: 5, _limit: 5 })
  }

  return (
    <div>
      <button onClick={updatePage}>Update Page</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
```

你可以在任意地方，不管组件内还是组件外，你都可以可以调用`totoStore.updateParams`更新依赖，从而实现数据更新。

## 使用 fetcher

有时候，你需要在组件外部重新获取数据，但`useFetch` 却没有任何可以被依赖的参数，这时你可以使用 fetcher

```tsx
import { fetcher } from 'dahlia/rest'

const Todos = () => {
  const { loading, data, error } = useFetch('/todos', { name: 'GetTodo' })

  if (loading) return <span>loading...</span>
  if (error) return <span>error!</span>

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

const Refresh = () => (
  <button onClick={fetcher.GetTodos.refetch()}>refresh</button>
)

const TodoApp = () => (
  <div>
    <Refresh />
    <Todos />
  </div>
)
```

使用 fetcher 是，你需要为`useFetch` 提供 name 参数，用法是：`fetcher['name'].refetch()`，这里的 `refetch` 和内部 `refetch` 是同一个函数，所以它也有 options 参数。
