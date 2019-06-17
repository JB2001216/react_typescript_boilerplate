import spawn from 'cross-spawn'
import { Command } from '@oclif/command'
import { reactScripts } from '../utils/paths'

export default class Test extends Command {
  static description = 'Runs unit tests in project'
  static aliases = ['t']
  static examples = ['$ dahlia test', '$ dh t']

  async run() {
    spawn(reactScripts, ['test'], {
      stdio: 'inherit',
    })
  }
}
