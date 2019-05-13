import path from 'path'
import spawn from 'cross-spawn'

import { canUseYarn } from './canUseYarn'

function getInstallArgs(root: string) {
  const useYarn = canUseYarn()
  const args = ['--registry', 'https://registry.npm.taobao.org']

  if (useYarn) {
    args.push('--cwd')
    args.push(root)
  }

  return args
}

export function install(root: string) {
  const command = canUseYarn() ? 'yarnpkg' : 'npm'
  const args = getInstallArgs(root)

  // for npm
  if (!canUseYarn()) process.chdir(root)

  const child = spawn(command, args, { stdio: 'inherit' })

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code !== 0) {
        // TODO: handle ERROR
        reject({
          command: `${command} ${args.join(' ')}`,
        })
        return
      }

      process.chdir(path.resolve(root, '..'))
      resolve()
    })
  })
}
