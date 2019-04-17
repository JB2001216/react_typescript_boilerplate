import { useState } from 'react'
import { Options, Body } from 'dahlia-request'
import { fetch } from './fetch'
import { Update, UpdateResult } from './types'

function getOptions(options?: Options): Options {
  const defaultOpt = { method: 'POST' } as Options
  if (!options) return defaultOpt
  return { ...defaultOpt, ...options }
}

export const useUpdate = <T extends any>(url: string, options?: Options) => {
  const initialState = {} as UpdateResult<T>
  const [result, setState] = useState(initialState)

  const updateData = async (body?: Body) => {
    setState(prev => ({ ...prev, loading: true }))
    try {
      const opt = getOptions(options)
      if (body) opt.body = body

      const data: T = await fetch(url, opt)
      setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const update = (body?: Body): any => {
    updateData(body)
  }

  const out: [Update, UpdateResult<T>] = [update, result]

  return out
}
