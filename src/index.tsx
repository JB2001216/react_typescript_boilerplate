import React from 'react'
import { render } from 'react-dom'
import { requestHooks } from 'request-hooks'
import { Router } from 'corolla'
import gql from 'gql-tag'

import { Config } from './config'

function bootstrap(options: Config) {
  const { routes, graphql, rest, selector } = options
  requestHooks.config({ graphql, rest })
  render(<Router routes={routes} />, document.querySelector(selector))
}

const Dahlia = {
  bootstrap,
}

export { bootstrap, gql, Config }

export default Dahlia
