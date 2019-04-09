import { Command } from '@oclif/command'

import { reactScriptsModulePath } from '../utils/paths'
import { prepare } from '../utils/prepare'
import { watcher } from '../utils/wather'

import { disableClearConsole } from '../utils/disableClearConsole'
import { customizeServer } from '../utils/customizeServer'

import { disableCheckRequiredFilesPath } from '../utils/disableCheckRequiredFilesPath'
import { disableCheckTS } from '../utils/disableCheckTS'
import { customizePaths } from '../utils/customizePaths'
import { customizeWebpack } from '../utils/customizeWebpack'

export default class Start extends Command {
  static description = 'Run a dev server for development'
  static aliases = ['s']
  static examples = [`$ dh start`]

  async run() {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development'

    prepare()
    watcher()

    // customize cra
    customizePaths()
    customizeWebpack()

    // TODO: hack
    customizeServer()
    disableCheckRequiredFilesPath()
    disableClearConsole()

    disableCheckTS()

    require(`${reactScriptsModulePath}/scripts/start`)
  }
}
