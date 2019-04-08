import { Command } from '@oclif/command'

import { reactScriptsModulePath } from '../utils/paths'
import { createDahliaConfig } from '../utils/createDahliaConfig'
import { customizeAppInfo } from '../utils/customizeAppInfo'
import { createEntryFile } from '../utils/createEntryFile'
import { createHtmlFile } from '../utils/createHtmlFile'
import { createPublicFiles } from '../utils/createPublicFiles'
import { createConfigFile } from '../utils/createConfigFile'
import { createRouterConfig } from '../utils/createRouterConfig'
import { createModalConfig } from '../utils/createModalConfig'
import { createLocaleTypings } from '../utils/createLocaleTypings'
import { createLocalesFiles } from '../utils/createLocalesFiles'
import { createInterceptorFiles } from '../utils/createInterceptorFiles'
import { watchConfig } from '../utils/watchConfig'
import { watchRouterConfig } from '../utils/watchRouterConfig'
import { watchModalConfig } from '../utils/watchModalConfig'
import { watchPages } from '../utils/watchPages'
import { watchModals } from '../utils/watchModals'
import { watchLocale } from '../utils/watchLocale'
import { disableCheckRequiredFilesPath } from '../utils/disableCheckRequiredFilesPath'
import { disableClearConsole } from '../utils/disableClearConsole'
import { disableCheckTS } from '../utils/disableCheckTS'
import { customizePaths } from '../utils/customizePaths'
import { customizeWebpack } from '../utils/customizeWebpack'
import { customizeServer } from '../utils/customizeServer'

export default class Start extends Command {
  static description = 'Run a dev server for development'
  static aliases = ['s']
  static examples = [`$ dh start`]

  async run() {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development'

    createDahliaConfig()

    customizeAppInfo()

    // create files
    createEntryFile()
    createPublicFiles()
    createHtmlFile()
    createConfigFile()
    createRouterConfig()
    createModalConfig()
    createLocalesFiles()
    await createLocaleTypings()
    createInterceptorFiles()

    // watch files
    watchConfig()
    watchRouterConfig()
    watchPages()
    watchModalConfig()
    watchModals()
    watchLocale()

    // customize cra
    customizePaths()
    customizeWebpack()
    // TODO:
    customizeServer()
    disableCheckRequiredFilesPath()
    disableClearConsole()
    disableCheckTS()

    require(`${reactScriptsModulePath}/scripts/start`)
  }
}
