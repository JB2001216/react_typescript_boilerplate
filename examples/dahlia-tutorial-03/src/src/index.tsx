import React from 'react'
import { render } from 'react-dom'
import { requestHooks } from 'request-hooks'
import { createStore } from 'stamen'
import gql from 'gql-tag'
import { useQuery, useMutate, useFetch, useUpdate } from 'request-hooks'
import { Router, Routes as CorollaRoutes, Link, routerStore } from 'corolla'

import { Options } from './config'

export type Routes = CorollaRoutes

function bootstrap(options: Options) {
  const { routes, graphql, rest, selector } = options
  requestHooks.config({ graphql, rest })
  render(<Router routes={routes} />, document.querySelector(selector))
}

const Dahlia = {
  bootstrap,
  gql,
  useQuery,
  useMutate,
  useFetch,
  useUpdate,
  createStore,
  routerStore,
  Link,
}

export { gql, useQuery, useMutate, useFetch, useUpdate, createStore, routerStore, Link }

export default Dahlia
