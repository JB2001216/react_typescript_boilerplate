import React from 'react'
import { observe, raw } from 'dahlia-store'

import { getPath, useMount, useUnmount, createPage } from '../util'
import store from '../routerStore'
import { Routes } from '../typings'

const handlePop = () => {
  store.go({ path: getPath(), replace: false })
}

const Router = observe<{ routes: Routes }>(props => {
  const { currentPage, defaultPage, inited } = store

  useMount(() => {
    addEventListener('popstate', handlePop)
    store.init(props.routes)
    store.go({ path: getPath() })
  })

  useUnmount(() => {
    removeEventListener('popstate', handlePop)
  })

  const DefaultPage = defaultPage.component

  // TODO: handle default page
  if (!currentPage) {
    return inited ? <DefaultPage /> : null
  }

  return createPage([raw(currentPage)], [])
})

export default Router
