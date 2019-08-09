import { GraphQLClient } from 'dahlia-graphql-client'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { GraphqlConfig, Options } from './types'
import clients from './clients'

export let graphqlConfig = {
  endpoint: '/graphql',
} as GraphqlConfig

export function config(options: GraphqlConfig) {
  clients.setupGraphqlClient(options)
  clients.setupSubscriptionClient(options)
  graphqlConfig = { ...graphqlConfig, ...options }
}
