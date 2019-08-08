import { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { graphqlConfig } from './config'

import { SubscribeResult } from './types'

export interface SubscriptionOption {
  variables?: Object
  operationName?: string
}

export function useSubscribe<T = any>(input: string, options?: SubscriptionOption) {
  const { subscriptionsEndpoint = '' } = graphqlConfig
  const { variables = {}, operationName = '' } = options || ({} as SubscriptionOption)
  const client = new SubscriptionClient(subscriptionsEndpoint, {
    reconnect: true,
  })

  let unmounted = false
  const initialState = { loading: true } as SubscribeResult<T>
  const [result, setState] = useState(initialState)

  const fetchData = async () => {
    client
      .request({
        query: gql`
          ${input}
        `,
        variables,
        operationName,
      })
      .subscribe({
        next({ data }) {
          if (!unmounted) setState(prev => ({ ...prev, loading: false, data }))
        },
        error(error) {
          if (!unmounted) setState(prev => ({ ...prev, loading: false, error }))
        },
        complete() {
          console.log('complete.....')
        },
      })
  }

  useEffect(() => {
    fetchData()
    return () => {
      unmounted = true
    }
  }, [])

  return result
}
