import path from 'path'
import fs from 'fs'

export const baseDir = path.join(__dirname, '..', '..')

export const projectDir = path.resolve(fs.realpathSync(process.cwd()))

export const dahliaConfigPath = `${projectDir}/dahlia.config.ts`

export const tmpDir = `${projectDir}/.dahlia`
export const tmpConfigDir = `${projectDir}/.dahlia/config`

export const pagesDir = `${projectDir}/pages`

export const pageFiles = `${projectDir}/pages/**/*.{ts,tsx}`

export const configs = [
  {
    origin: `${projectDir}/config/config.dev.ts`,
    target: `${projectDir}/.dahlia/config/config.dev.ts`,
  },
  {
    origin: `${projectDir}/config/config.prod.ts`,
    target: `${projectDir}/.dahlia/config/config.prod.ts`,
  },
]

export const routesPath = `${projectDir}/config/routes.ts`

export const tmpRoutesPath = `${projectDir}/.dahlia/config/routes.ts`

export const devConfigPath = `${projectDir}/config/config.dev.ts`

export const tmpDevConfigPath = `${projectDir}/.dahlia/config/config.dev.ts`

export const tmpProdConfigPath = `${projectDir}/.dahlia/config/config.prod.ts`

export const tmpRoutesConfigPath = `${projectDir}/.dahlia/config/routes.ts`

export const entryPath = `${projectDir}/.dahlia/index.ts`

export const localesDir = `${projectDir}/locales`

export const defaultLocalePath = `${projectDir}/locales/default.ts`
export const localeTypingsPath = `${projectDir}/locales/i18n.ts`

export const reactScripts = path.join(
  projectDir,
  'node_modules',
  '.bin',
  'react-scripts',
)

const useProjectCli = __dirname.includes(
  path.join(projectDir, 'node_modules', 'dahlia-cli'),
)
const reactScriptsBaseDir = useProjectCli ? projectDir : baseDir

const reactScriptsModulePath = path.join(
  reactScriptsBaseDir,
  'node_modules',
  'react-scripts',
)
const webpackConfigPath = `${reactScriptsModulePath}/config/webpack.config.js`
const devServerConfigPath = `${reactScriptsModulePath}/config/webpackDevServer.config.js`

const reactScriptsPaths = `${reactScriptsModulePath}/config/paths.js`

export { reactScriptsModulePath, webpackConfigPath, devServerConfigPath, reactScriptsPaths }
