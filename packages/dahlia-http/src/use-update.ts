import { useState } from 'react'
import fetch from 'cross-fetch'

import { dahliaHttpConfig } from './config'
import { Update, UpdateResult } from './types'

export const useUpdate = <T extends {}>(url: string) => {
  const initialState = {} as UpdateResult<T>
  const [result, setState] = useState(initialState)
  const { endpoint } = dahliaHttpConfig.rest

  const updateData = async () => {
    try {
      const res = await fetch(endpoint + url)
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      const data = await res.json()
      setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const update = (): any => {
    setState(prev => ({ ...prev, loading: true }))
    updateData()
  }

  const out: [Update, UpdateResult<T>] = [update, result]

  return out
}