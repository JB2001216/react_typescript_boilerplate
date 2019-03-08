import { json2ts } from 'json-ts'
import fs from 'fs'
import { localeTypingsPath, defaultLocalePath } from './paths'
import { formatCode } from './formatCode'

function writeFile(text: string) {
  fs.writeFileSync(localeTypingsPath, `export ${text}`, { encoding: 'utf8' })
}

export async function createLocaleTypings() {
  try {
    delete require.cache[require.resolve(defaultLocalePath)]
    const locale = require(defaultLocalePath)
    const jsonText = JSON.stringify(locale.default)
    const typings = json2ts(jsonText, { rootName: 'I18n', prefix: '' })
    writeFile(formatCode(typings))
  } catch (e) {
    // TODO:
  }
}
