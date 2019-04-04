import { join } from 'path'
import { Configuration } from 'webpack-dev-server'
import { devServerConfigPath, appDir } from './paths'
import { getDahliaConfig } from './getDahliaConfig'

export const customizeServer = () => {
  const devServerConfig = require(devServerConfigPath)

  let config: Configuration = devServerConfig()
  config.contentBase = [
    join(appDir, '.dahlia', 'public'),
    join(appDir, 'public'),
  ]

  const dahliaConfig = getDahliaConfig()

  if (dahliaConfig && dahliaConfig.devServer) {
    config = dahliaConfig.devServer(config)
  }

  require.cache[require.resolve(devServerConfigPath)].exports = () => {
    return config
  }
}
