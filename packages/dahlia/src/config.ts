import { Routes } from 'dahlia-router'

export interface Config {
  routes: Routes
  modals: any
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
  }
  root: string
}

export const config: Config = {} as Config
