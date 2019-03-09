import path from 'path'
import fs from 'fs'

export const baseDir = path.join(__dirname, '..', '..')

export const projectDir = path.resolve(fs.realpathSync(process.cwd()))

export const dahliaConfigPath = `${projectDir}/dahlia.config.ts`

export const srcDir = `${projectDir}/src`

export const tmpDir = `${srcDir}/.dahlia`
export const tmpConfigDir = `${srcDir}/.dahlia/config`

export const pagesDir = `${srcDir}/pages`

export const pageFiles = `${srcDir}/pages/**/*.{ts,tsx}`

export const configs = [
  {
    origin: `${srcDir}/config/config.dev.ts`,
    target: `${srcDir}/.dahlia/config/config.dev.ts`,
  },
  {
    origin: `${srcDir}/config/config.prod.ts`,
    target: `${srcDir}/.dahlia/config/config.prod.ts`,
  },
]

export const routesPath = `${srcDir}/config/routes.ts`

export const tmpRoutesPath = `${srcDir}/.dahlia/config/routes.ts`

export const devConfigPath = `${projectDir}/src/config/config.dev.ts`

export const tmpDevConfigPath = `${projectDir}/src/.dahlia/config/config.dev.ts`

export const tmpProdConfigPath = `${projectDir}/src/.dahlia/config/config.prod.ts`

export const tmpRoutesConfigPath = `${projectDir}/src/.dahlia/config/routes.ts`

export const entryPath = `${projectDir}/src/.dahlia/index.ts`

export const localesDir = `${projectDir}/src/locales`

export const defaultLocalePath = `${projectDir}/src/locales/default.ts`
export const localeTypingsPath = `${projectDir}/src/locales/i18n.ts`

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

export { reactScriptsModulePath, webpackConfigPath, devServerConfigPath }
