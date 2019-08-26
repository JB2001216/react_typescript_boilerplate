import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import path from 'path'
import yosay from 'yosay'

import { checkAppDir } from './utils/checkAppDir'
import { createApp } from './utils/createApp'
import { createAppDir } from './utils/createAppDir'
import { getProjectType } from './utils/getProjectType'
import { install } from './utils/install'
import { setAppName } from './utils/setAppName'
import { showTips } from './utils/showTips'

const { green, yellow } = chalk

class CreateDahliaApp extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'appName' }]

  async run() {
    const { args } = this.parse(CreateDahliaApp)
    const appName: string = args.appName
    if (!appName) {
      return this.log(yellow('required project name, eg: '), green('create-dahlia-app myapp'))
    }
    const root = path.resolve(appName)

    console.log(yosay('您正在初始化 dahlia 项目...'))

    try {
      const projectType = await getProjectType()
      const type = projectType === 'dahlia-admin' ? 'admin' : 'basic'
      createAppDir(root)
      checkAppDir(root, appName)
      await createApp(root, type)
      setAppName(root, appName)
      await install(root)
      showTips(root, appName)
    } catch (error) {
      this.log(error)
    }
  }
}

export = CreateDahliaApp
