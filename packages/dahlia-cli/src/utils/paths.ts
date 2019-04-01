import path from 'path'
import fs from 'fs'

export const baseDir = path.join(__dirname, '..', '..')

export const appDir = path.resolve(fs.realpathSync(process.cwd()))

export const tmpDir = `${appDir}/.dahlia`
export const tmpConfigDir = `${tmpDir}/config`

export const dahliaConfigPath = `${appDir}/dahlia.config.ts`

export const pagesDir = `${appDir}/pages`
export const pageFiles = `${appDir}/pages/**/*.{ts,tsx}`

export const modalsDir = `${appDir}/modals`
export const modalFiles = `${appDir}/modals/**/*.{ts,tsx}`

export const configs = [
  {
    origin: `${appDir}/config/config.dev.ts`,
    target: `${tmpDir}/config/config.dev.ts`,
  },
  {
    origin: `${appDir}/config/config.prod.ts`,
    target: `${tmpDir}/config/config.prod.ts`,
  },
]

export const interceptorPaths = [
  {
    origin: `${appDir}/interceptors/response.ts`,
    target: `${tmpDir}/interceptors/response.ts`,
  },
  {
    origin: `${appDir}/interceptors/responseError.ts`,
    target: `${tmpDir}/interceptors/responseError.ts`,
  },
  {
    origin: `${appDir}/interceptors/request.ts`,
    target: `${tmpDir}/interceptors/request.ts`,
  },
  {
    origin: `${appDir}/interceptors/requestError.ts`,
    target: `${tmpDir}/interceptors/requestError.ts`,
  },
]

export const devConfigPath = `${appDir}/config/config.dev.ts`
export const tmpDevConfigPath = `${tmpDir}/config/config.dev.ts`
export const tmpProdConfigPath = `${tmpDir}/config/config.prod.ts`

export const routerConfigPath = `${appDir}/config/router.config.ts`
export const tmpRouterConfigPath = `${tmpDir}/config/router.config.ts`

export const modalConfigPath = `${appDir}/config/modal.config.ts`
export const tmpModalsConfigPath = `${tmpDir}/config/modal.config.ts`

export const entryPath = `${tmpDir}/index.ts`
export const htmlPath = `${tmpDir}/index.html`
export const publicDir = `${tmpDir}/public`

export const localesDir = `${appDir}/locales`
export const defaultLocalePath = `${appDir}/locales/default.ts`
export const localeTypingsPath = `${appDir}/locales/i18n.ts`

export const interceptorsDir = `${appDir}/interceptors`
export const tmpInterceptorsDir = `${tmpDir}/interceptors`

export const reactScripts = path.join(
  appDir,
  'node_modules',
  '.bin',
  'react-scripts',
)

const useProjectCli = __dirname.includes(
  path.join(appDir, 'node_modules', 'dahlia-cli'),
)
const reactScriptsBaseDir = useProjectCli ? appDir : baseDir

const reactScriptsModulePath = path.join(
  reactScriptsBaseDir,
  'node_modules',
  'react-scripts',
)
const webpackConfigPath = `${reactScriptsModulePath}/config/webpack.config.js`
const devServerConfigPath = `${reactScriptsModulePath}/config/webpackDevServer.config.js`

const reactScriptsPaths = `${reactScriptsModulePath}/config/paths.js`

export {
  reactScriptsModulePath,
  webpackConfigPath,
  devServerConfigPath,
  reactScriptsPaths,
}
