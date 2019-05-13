import path from 'path'
import spawn from 'cross-spawn'

import { canUseYarn } from './canUseYarn'

export function install(root: string) {
  const useYarn = canUseYarn()
  const command = useYarn ? 'yarnpkg' : 'npm'
  const args: string[] = []
  if (useYarn) {
    args.push('--cwd')
    args.push(root)
  }

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
