import fs from 'fs-extra';
import { getDahliaConfig } from './getDahliaConfig'
import { tmpHtmlPath } from './paths';

export const customizeAppInfo = () => {
  const dahliaConfig = getDahliaConfig()
  const title =
    dahliaConfig && dahliaConfig.title ? dahliaConfig.title : 'Dahlia App'

    // set Title
   const htmlString = fs.readFileSync(tmpHtmlPath,{encoding: 'utf8'})
   fs.writeFileSync(tmpHtmlPath, htmlString.replace('%TITLE%', title), {encoding: 'utf8'})

}
