import React from 'react'
import { createStore } from 'stamen'
import { NO_ROUTE_MATCH } from './constant'

import {
  pushState,
  replaceState,
  setFullPath,
  findRooPage,
  findDefaultPage,
  getParams,
} from './util'

import { State } from './typings'

interface Route {
  path?: string
  component?: any
  children?: Routes
}
type Routes = Route[]

const initialState: State = {
  inited: false,
  defaultPage: {
    fullPath: '**',
    component: () => <div>{NO_ROUTE_MATCH}</div>,
    root: false,
    default: false,
    parentPath: '',
  },
  pages: [],
  params: {},
  currentPath: '',
}

export const { useStore, dispatch } = createStore({
  state: initialState,
  reducers: {
    init(state, routes: Routes) {
      const pages = setFullPath(routes, '')
      state.pages = pages
      state.defaultPage = findDefaultPage(pages) || state.defaultPage
    },
    go(state, { path, replace }: { path: string; replace?: boolean }) {
      const { pages } = state
      const rootPage = findRooPage(pages, path)
      const params = getParams(pages)

      if (!state.inited) {
        state.inited = true
      }

      if (rootPage) {
        state.currentPath = path
        state.currentPage = rootPage
        state.params = params || {}
        replace ? replaceState(path) : pushState(path)
      }
    },
  },
})

export default { useStore, dispatch }
