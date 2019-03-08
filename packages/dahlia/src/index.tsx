import React from 'react'
import { render } from 'react-dom'
import { config } from 'dahlia-http'
import { Router } from 'dahlia-router'
import gql from 'gql-tag'

import { Config } from './config'

function bootstrap(options: Config) {
  const { routes, graphql, rest, root } = options
  config({ graphql, rest })
  render(<Router routes={routes} />, document.querySelector(root))
}

const Dahlia = {
  bootstrap,
}

export { bootstrap, gql }
export * from './config'
export default Dahlia
