import { Routes } from 'corolla'

export interface Options {
  routes: Routes
  selector: string
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
  }
}

export const config: Options = {} as Options
