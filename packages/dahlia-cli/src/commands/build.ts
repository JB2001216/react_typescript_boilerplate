import { Command } from '@oclif/command'

import { reactScriptsModulePath } from '../utils/paths'

import { createEntryFile } from '../utils/createEntryFile'
import { disableCheckRequiredFilesPath } from '../utils/disableCheckRequiredFilesPath'
import { disableCheckTS } from '../utils/disableCheckTS'
import { customizeWebpack } from '../utils/customizeWebpack'

export default class Build extends Command {
  static description = 'Build project for production'
  static aliases = ['b']
  static examples = [`$ dh build`]

  async run() {
    process.env.NODE_ENV = 'production'

    createEntryFile()
    customizeWebpack('production')
    disableCheckRequiredFilesPath()
    disableCheckTS()

    // run original script
    require(`${reactScriptsModulePath}/scripts/build`)
  }
}
