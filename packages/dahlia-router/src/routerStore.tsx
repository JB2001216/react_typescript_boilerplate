import React from 'react'
import { createStore } from 'dahlia-store'
import { NO_ROUTE_MATCH } from './constant'

import {
  pushState,
  replaceState,
  setFullPath,
  findRooPage,
  findDefaultPage,
  getParams,
} from './util'

import { Page } from './typings'

interface Route {
  path?: string
  component?: any
  children?: Routes
}
type Routes = Route[]

const defaultPage = {
  fullPath: '**',
  component: () => <div>{NO_ROUTE_MATCH}</div>,
  root: false,
  default: false,
  parentPath: '',
} as Page
const currentPath = ''
const currentPage = {} as Page
const pages: Page[] = []
const params: {
  [key: string]: any
} = {}

const store = createStore({
  inited: false,
  defaultPage,
  pages,
  params,
  currentPath,
  currentPage,
  init(routes: Routes) {
    const pages = setFullPath(routes, '')
    store.pages = pages
    store.defaultPage = findDefaultPage(pages) || store.defaultPage
  },
  go({ path, replace }: { path: string; replace?: boolean }) {
    const { pages } = store
    const rootPage = findRooPage(pages, path)
    const params = getParams(pages)

    if (!store.inited) {
      store.inited = true
    }

    if (rootPage) {
      store.currentPath = path
      store.currentPage = rootPage
      store.params = params || {}
      console.log('store.currentPage:', store.currentPage)
      replace ? replaceState(path) : pushState(path)
    }
  },
})

export default store
