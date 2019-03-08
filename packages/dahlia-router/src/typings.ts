export interface Window {
  [propName: string]: any
}

export type Pages = Page[]
export interface Page {
  path?: string
  fullPath: string
  children?: any[]
  component?: any
  root: boolean
  default: boolean
  parentPath: string
}

export interface State {
  inited: boolean
  pages: Page[]
  defaultPage: Page
  params: {
    [key: string]: any
  }
  currentPage?: Page
  currentPath?: string
}
