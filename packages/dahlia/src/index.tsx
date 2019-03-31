import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { config } from 'dahlia-http'
import { Router } from 'dahlia-router'
import { Modals } from 'dahlia-modal'
import gql from 'gql-tag'

import { Config } from './config'

function bootstrap(options: Config) {
  const { routes, graphql, rest, root, modals } = options
  config({ graphql, rest })
  render(
    <Fragment>
      <Router routes={routes} />
      <Modals config={modals} />
    </Fragment>,
    document.querySelector(root),
  )
}

const Dahlia = {
  bootstrap,
}

export { bootstrap, gql }
export * from './config'
export default Dahlia
