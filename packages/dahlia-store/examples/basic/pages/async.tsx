import React, { useEffect } from 'react'
import { request } from 'dahlia-http'

import { createStore, Observer } from '../src'
import Nav from '../components/Nav'

const todoStore = createStore({
  todo: {},
  async fetchTodo() {
    todoStore.todo = await request('https://jsonplaceholder.typicode.com/todos/1')
    return todoStore.todo
  },
})

export default () => {
  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    await todoStore.fetchTodo()
  }

  return (
    <div>
      <Nav />
      <div>
        <Observer>{() => <pre>{JSON.stringify(todoStore.todo)}</pre>}</Observer>
      </div>
    </div>
  )
}
