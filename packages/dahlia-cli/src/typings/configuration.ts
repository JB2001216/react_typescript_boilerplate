import { Configuration as WebpackConfig } from 'webpack'
import { Configuration as ServerConfig } from 'webpack-dev-server'

export interface Plugin {
  webpack?: (config: WebpackConfig, env?: string) => WebpackConfig
  // TODO: configFunction
  devServer?: (configFunction: any, env?: string) => ServerConfig
}

export interface Configuration extends Plugin {
  title?: string
  buildDir?: string
  plugins?: Plugin[]
}
