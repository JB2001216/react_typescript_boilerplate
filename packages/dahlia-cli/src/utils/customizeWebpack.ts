import { join } from 'path'
import { Configuration } from 'webpack'

import { webpackConfigPath, appDir } from './paths'
import { override } from './webpackOverride'
import { alias } from './overrideAlias'
import { overrideWebpackExclude } from './overrideWebpackExclude'
import { getDahliaConfig } from './getDahliaConfig'
import WebpackBar from 'webpackbar'

function resolve(path: string) {
  return join(appDir, path)
}

export const customizeWebpack = () => {
  const webpackConfig = require(webpackConfigPath)
  require.cache[require.resolve(webpackConfigPath)].exports = (env: string) => {
    const config: Configuration = webpackConfig(env)

    if (config.plugins) {
      config.plugins.push(new WebpackBar())
    }

    let newConfig = override(config, env).pipe(
      overrideWebpackExclude(),
      alias({
        '@utils': resolve('utils/'),
        '@stores': resolve('stores/'),
        '@components': resolve('components/'),
        '@layouts': resolve('layouts/'),
        '@pages': resolve('pages/'),
        '@modals': resolve('modals/'),
        '@config': resolve('config/'),
        '@interfaces': resolve('interfaces/'),
        '@locales': resolve('locales/'),
      }),
    )

    const dahliaConfig = getDahliaConfig()

    // handle config.plugins
    if (dahliaConfig && dahliaConfig.plugins) {
      for (const plugin of dahliaConfig.plugins) {
        if (plugin.webpack) {
          newConfig = plugin.webpack(newConfig, env)
        }
      }
    }

    // handle config.webpack
    if (dahliaConfig && dahliaConfig.webpack) {
      return dahliaConfig.webpack(newConfig, env)
    }
    return newConfig
  }
}
