import React from 'react'
import { Observer } from 'dahlia-store'

import { getPath, createPage, useMount, useUnmount } from '../util'
import store from '../routerStore'

const handlePop = () => {
  store.go({ path: getPath(), replace: false })
}

const Router: any = (props: any) => {
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

  return <Observer>{() => createPage([store.currentPage], [])}</Observer>
}

export default Router
