import texts from './texts'
import { getDahliaConfig } from './getDahliaConfig'

export const customizeAppInfo = () => {
  const dahliaConfig = getDahliaConfig()
  const title =
    dahliaConfig && dahliaConfig.title ? dahliaConfig.title : 'Dahlia App'
  texts.html = texts.html.replace('%TITLE%', title)
}
