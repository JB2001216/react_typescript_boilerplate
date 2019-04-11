import { join } from 'path'
import override from 'dahlia-webpack-override'
import styledJsx from 'dahlia-webpack-styled-jsx'
import styleComponents from 'dahlia-webpack-styled-components'
import alias from 'dahlia-webpack-alias'
import { Configuration } from 'webpack'

import { webpackConfigPath, appDir } from './paths'
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

    const newConfig = override(config, env).pipe(
      styleComponents(),
      styledJsx(),
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

    if (dahliaConfig && dahliaConfig.webpack) {
      return dahliaConfig.webpack(newConfig, env)
    }
    return newConfig
  }
}
