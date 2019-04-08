import { json2ts } from 'json-ts'
import fs from 'fs-extra'
import { localeTypingsPath, tmpLocalesDir, tmpDefaultLocalePath } from './paths'
import { formatCode } from './formatCode'

function writeFile(text: string) {
  fs.ensureDirSync(tmpLocalesDir)

  const typingText = formatCode(`export ${text}`)

  fs.writeFileSync(localeTypingsPath, typingText, { encoding: 'utf8' })
}

export async function createLocaleTypings() {
  try {
    delete require.cache[require.resolve(tmpDefaultLocalePath)]
    const locale = require(tmpDefaultLocalePath)
    const jsonText = JSON.stringify(locale.default)
    const typings = json2ts(jsonText, { rootName: 'I18n', prefix: '' })
    writeFile(formatCode(typings))
  } catch (e) {
    console.log('[国际化处理错误]', e)
  }
}
