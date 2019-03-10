import { Configuration as WebpackConfig } from 'webpack'
import { Configuration as ServerConfig } from 'webpack-dev-server'

export interface Configuration {
  title?: string
  buildDir?: string
  webpack?: (config: WebpackConfig, env: string) => WebpackConfig
  // TODO: configFunction
  devServer?: (configFunction: any, env?: string) => ServerConfig
}
