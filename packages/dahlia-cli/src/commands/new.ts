import { Command } from '@oclif/command'
import chalk from 'chalk'
import path from 'path'
import yosay from 'yosay'

import { createAppDir } from '../utils/createAppDir'
import { checkAppDir } from '../utils/checkAppDir'
import { getProjectType } from '../utils/getProjectType'
import { createApp } from '../utils/createApp'
import { setAppName } from '../utils/setAppName'
import { install } from '../utils/install'
import { showTips } from '../utils/showTips'

const { green, yellow } = chalk

export default class New extends Command {
  static description = 'Create a new Dahlia app'
  static aliases = ['n']
  static examples = ['$ dahlia new myapp', '$ dh n myapp']

  static args = [{ name: 'appName' }]

  async run() {
    const { args } = this.parse(New)

    const appName: string = args.appName
    if (!appName) {
      return this.log(
        yellow('required project name, eg: '),
        green('dh new myapp'),
      )
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
