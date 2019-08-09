import { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { graphqlConfig } from './config'
import { query } from './query'
import { SubscribeResult, Variables, Interceptor } from './types'

export interface SubscriptionOption {
  variables?: Object
  operationName?: string
  initialQuery?: {
    query: string
    variables?: Variables
  }
}

export function useSubscribe<T = any>(input: string, options?: SubscriptionOption) {
  const { subscriptionsEndpoint = '', interceptor: configInterceptors } = graphqlConfig
  const { variables = {}, operationName = '', initialQuery = '' } =
    options || ({} as SubscriptionOption)
  const client = new SubscriptionClient(subscriptionsEndpoint, {
    reconnect: true,
  })

  let unmounted = false
  let interceptor = {} as Interceptor
  const initialState = { loading: true } as SubscribeResult<T>
  const [result, setState] = useState(initialState)

  if (configInterceptors) interceptor = configInterceptors

  const initQuery = async () => {
    if (!initialQuery) return

    setState(prev => ({ ...prev, loading: true }))
    try {
      let data = await query<T>(initialQuery.query, initialQuery.variables || {})

      if (interceptor.responses) {
        interceptor.responses.forEach(item => {
          data = item(data)
        })
      }

      if (!unmounted) setState(prev => ({ ...prev, loading: false, data }))
      return data
    } catch (error) {
      if (!unmounted) setState(prev => ({ ...prev, loading: false, error }))
    }
  }

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
          console.log('completed')
        },
      })
  }

  useEffect(() => {
    if (initialQuery) initQuery()

    fetchData()
    return () => {
      unmounted = true
    }
  }, [])

  return result
}
