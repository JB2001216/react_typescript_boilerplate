import React from 'react'
import { observe } from 'dahlia-store'

import { getPath, createPage, useMount, useUnmount } from '../util'
import store from '../routerStore'

const handlePop = () => {
  store.go({ path: getPath(), replace: false })
}

const Router = observe<{routes: any[]}>((props) => {
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

  if (!currentPage) {
    return inited ? <DefaultPage /> : null
  }
  return createPage([store.currentPage], [])
})

export default Router
