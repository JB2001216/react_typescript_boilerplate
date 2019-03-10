import fs from 'fs-extra'
import { join } from 'path'
import { Configuration } from 'webpack-dev-server'
import { dahliaConfigPath, devServerConfigPath, projectDir } from './paths'

export const customizeServer = () => {
  const devServerConfig = require(devServerConfigPath)

  let devServer = (configFunction: any, env?: string) => (
    proxy: any,
    allowedHost: any,
  ) => {
    const config: Configuration = configFunction(proxy, allowedHost, env)
    // TODO
    config.contentBase = [
      join(projectDir, '.dahlia', 'public'),
      join(projectDir, 'public'),
    ]
    return config
  }

  if (fs.existsSync(dahliaConfigPath)) {
    const dahliaConfig = require(dahliaConfigPath)
    if (dahliaConfig.devServer) {
      devServer = dahliaConfig.devServer
    }
  }

  require.cache[require.resolve(devServerConfigPath)].exports = devServer(
    devServerConfig,
    process.env.NODE_ENV,
  )
}
