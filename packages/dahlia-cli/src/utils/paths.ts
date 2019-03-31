import path from 'path'
import fs from 'fs'

export const baseDir = path.join(__dirname, '..', '..')

export const appDir = path.resolve(fs.realpathSync(process.cwd()))

export const dahliaConfigPath = `${appDir}/dahlia.config.ts`

export const tmpDir = `${appDir}/.dahlia`
export const tmpConfigDir = `${appDir}/.dahlia/config`

export const pagesDir = `${appDir}/pages`
export const pageFiles = `${appDir}/pages/**/*.{ts,tsx}`

export const modalsDir = `${appDir}/modals`
export const modalsFiles = `${appDir}/modals/**/*.{ts,tsx}`

export const configs = [
  {
    origin: `${appDir}/config/config.dev.ts`,
    target: `${appDir}/.dahlia/config/config.dev.ts`,
  },
  {
    origin: `${appDir}/config/config.prod.ts`,
    target: `${appDir}/.dahlia/config/config.prod.ts`,
  },
]

export const routesPath = `${appDir}/config/routes.ts`

export const modalsPath = `${appDir}/config/modals.ts`

export const tmpRoutesPath = `${appDir}/.dahlia/config/routes.ts`

export const devConfigPath = `${appDir}/config/config.dev.ts`

export const tmpDevConfigPath = `${appDir}/.dahlia/config/config.dev.ts`

export const tmpProdConfigPath = `${appDir}/.dahlia/config/config.prod.ts`

export const tmpRoutesConfigPath = `${appDir}/.dahlia/config/routes.ts`

export const tmpModalsConfigPath = `${appDir}/.dahlia/config/modals.ts`

export const entryPath = `${appDir}/.dahlia/index.ts`

export const htmlPath = `${appDir}/.dahlia/index.html`
export const publicDir = `${appDir}/.dahlia/public`

export const localesDir = `${appDir}/locales`

export const defaultLocalePath = `${appDir}/locales/default.ts`
export const localeTypingsPath = `${appDir}/locales/i18n.ts`

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
