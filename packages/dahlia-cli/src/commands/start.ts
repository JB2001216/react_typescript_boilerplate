import { Command } from '@oclif/command'

import { reactScriptsModulePath } from '../utils/paths'
import { createEntryFile } from '../utils/createEntryFile'
import { createHtmlFile } from '../utils/createHtmlFile'
import { createPublicFiles } from '../utils/createPublicFiles'
import { createConfigFile } from '../utils/createConfigFile'
import { createRoutesFile } from '../utils/createRoutesFile'
import { createLocaleTypings } from '../utils/createLocaleTypings'
// import { createLocalesFiles } from '../utils/createLocalesFiles'
import { watchConfig } from '../utils/watchConfig'
import { watchRoutes } from '../utils/watchRoutes'
import { watchPages } from '../utils/watchPages'
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

    // create files
    createEntryFile()
    createPublicFiles()
    createHtmlFile()
    createConfigFile()
    createRoutesFile()
    // createLocalesFiles()
    await createLocaleTypings()

    // watch files
    watchConfig()
    watchRoutes()
    watchPages()
    watchLocale()

    // customize cra
    customizePaths()
    customizeWebpack()
    customizeServer()
    disableCheckRequiredFilesPath()
    disableClearConsole()
    disableCheckTS()

    require(`${reactScriptsModulePath}/scripts/start`)
  }
}
