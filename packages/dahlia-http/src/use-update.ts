import { useState } from 'react'

import { Update, UpdateResult } from './types'
import { request } from './request'

export const useUpdate = <T extends {}>(url: string) => {
  const initialState = {} as UpdateResult<T>
  const [result, setState] = useState(initialState)

  const updateData = async () => {
    try {
      const data: T = await request(url)
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
