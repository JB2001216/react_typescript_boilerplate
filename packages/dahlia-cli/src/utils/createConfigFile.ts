import fs from 'fs-extra'
import { tmpConfigDir, tmpDevConfigPath, tmpProdConfigPath } from './paths'
import { formatCode } from './formatCode'

const configText = formatCode(`
const config = {
  rest: {
    endpoint: '/',
  },
  graphql: {
    endpoint: '/',
  },
  root: '#root'
}
export default config
`)

export const createConfigFile = () => {
  fs.ensureDirSync(tmpConfigDir)
  fs.writeFileSync(tmpDevConfigPath, configText, { encoding: 'utf8' })
  fs.writeFileSync(tmpProdConfigPath, configText, { encoding: 'utf8' })
}
