import React from 'react'

import { getPath, createPage, useMount, useUnmount } from '../util'
import { useStore, dispatch } from '../routerStore'

const handlePop = () => {
  dispatch(A => A.go, { path: getPath(), replace: false })
}

const Router: React.SFC<{ routes: any[] }> = props => {
  const { currentPage, defaultPage, inited } = useStore(S => ({
    currentPage: S.currentPage,
    defaultPage: S.defaultPage,
    inited: S.inited,
  }))

  useMount(() => {
    addEventListener('popstate', handlePop)
    dispatch(A => A.init, props.routes)
    dispatch(A => A.go, { path: getPath() })
  })

  useUnmount(() => {
    removeEventListener('popstate', handlePop)
  })

  const DefaultPage = defaultPage.component
  if (!currentPage) {
    return inited ? <DefaultPage /> : null
  }
  return createPage([currentPage], [])
}

export default Router
