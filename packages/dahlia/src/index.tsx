import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { config as configRest } from 'dahlia-rest'
import { config as configGraphql } from 'dahlia-graphql'
import { Router } from './dahlia-router'
import { Modals } from 'dahlia-modal'
import gql from 'gql-tag'

import { Config } from './config'

function bootstrap(options: Config) {
  const { routes, graphql, rest, root, modals, app } = options
  if (rest) configRest(rest)
  if (graphql) configGraphql(graphql)

  const Wrapper = app ? app : Fragment

  render(
    <Wrapper>
      <Router routes={routes} />
      <Modals config={modals} />
    </Wrapper>,
    document.querySelector(root),
  )
}

const Dahlia = {
  bootstrap,
}

export { bootstrap, gql }
export * from './config'
export default Dahlia
