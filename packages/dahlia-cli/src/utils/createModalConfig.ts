import fs from 'fs-extra'
import { sep } from 'path'
import jetpack from 'fs-jetpack'

import {
  modalConfigPath,
  modalsDir,
  tmpConfigDir,
  tmpModalsConfigPath,
} from './paths'
import { formatCode } from './formatCode'

function last(arr: string[]): string {
  return arr[arr.length - 1]
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getModalName(path: string = '') {
  const fileName = last(path.split(sep))
  const modalName = fileName.replace(/\.tsx$/, '')
  return modalName
}

function getCmpName(path: string = '') {
  const fileName = last(path.split(sep))
  const modalName = fileName.replace(/\.tsx$/, '').replace(/[\.\-\^\$]/g, '_')
  return capitalizeFirstLetter(modalName)
}

function formatModals(modals: string[]) {
  return modals.map(item => {
    const modalName = getModalName(item)
    const cmpName = getCmpName(item)
    const modalImportPath = item
      .replace(/^modals/, '../../modals')
      .replace(/\.tsx$/, '')

    return {
      modalName,
      cmpName,
      modalImportPath,
    }
  })
}

function getModalsConfig(modals: string[]) {
  const modalArr = formatModals(modals)
  const importFiles = modalArr
    .map(item => {
      return `import ${item.cmpName} from '${item.modalImportPath}'`
    })
    .join('\n')
  const modalsString = modalArr
    .map(item => {
      return `{
  name: '${item.modalName}',
  component: ${item.cmpName},
},`
    })
    .join('\n')

  return `
${importFiles}

const modals = [
  ${modalsString}
]

export default modals;
    `
}

function writeFile(text: string) {
  fs.writeFileSync(tmpModalsConfigPath, text, { encoding: 'utf8' })
}

function writeFileFromModalsFile() {
  const routesConfig = fs.readFileSync(modalConfigPath, { encoding: 'utf8' })
  const text = routesConfig
    .replace(/\.\.\/modals/g, '../../modals')
    .replace(/\.\.\/layouts/g, '../../layouts')
    .replace(/@modals/g, '../../modals')
  writeFile(text)
}

export const createModalConfig = () => {
  fs.ensureDirSync(tmpConfigDir)

  if (fs.existsSync(modalConfigPath)) {
    writeFileFromModalsFile()
    return
  }

  const modals: string[] = fs.existsSync(modalsDir)
    ? jetpack.find(modalsDir, { matching: '**/*.tsx' })
    : []

  const modasText = getModalsConfig(modals)
  const code = formatCode(modasText)
  writeFile(code)
}
