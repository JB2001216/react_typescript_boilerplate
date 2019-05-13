import chalk from 'chalk'
import download from 'download-git-repo'

enum template {
  basic = 'forsigner/dahlia-basic',
  admin = 'forsigner/dahlia-admin',
}

const { cyan } = chalk

export async function createApp(root: string, type: 'basic' | 'admin') {
  return new Promise((resolve, reject) => {
    download(template[type], root, (err: any) => {
      if (err) return reject(err)
      resolve()
      console.log(`Creating a new Dahlia app in ${chalk.green(root)}.`)
      console.log()
      console.log('Installing packages. This might take a couple of minutes.')
      console.log(
        `Installing ${cyan('react')}, ${cyan('react-dom')}, and ${cyan(
          'dahlia',
        )}...`,
      )
      console.log()
    })
  })
}
