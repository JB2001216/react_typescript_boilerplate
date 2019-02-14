import { Routes } from 'corolla'

export interface Config {
  routes: Routes
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
  }
  root: string
}

export const config: Config = {} as Config
