import { Routes } from 'corolla'

export interface Config {
  routes: Routes
  selector: string
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
  }
}

export const config: Config = {} as Config
