import { Command } from '@oclif/command'

import { reactScriptsModulePath } from '../utils/paths'

import { createEntryFile } from '../utils/createEntryFile'
import { createHtmlFile } from '../utils/createHtmlFile'
import { createPublicFiles } from '../utils/createPublicFiles'
import { disableCheckRequiredFilesPath } from '../utils/disableCheckRequiredFilesPath'
import { disableCheckTS } from '../utils/disableCheckTS'
import { customizePaths } from '../utils/customizePaths'
import { customizeWebpack } from '../utils/customizeWebpack'

export default class Build extends Command {
  static description = 'Build project for production'
  static aliases = ['b']
  static examples = [`$ dh build`]

  async run() {
    process.env.NODE_ENV = 'production'

    createEntryFile()
    createHtmlFile()
    createPublicFiles()
    customizePaths()
    customizeWebpack()
    disableCheckRequiredFilesPath()
    disableCheckTS()

    // TODO: hack
    customizePaths()

    // run original script
    require(`${reactScriptsModulePath}/scripts/build`)
  }
}
