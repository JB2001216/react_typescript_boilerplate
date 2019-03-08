import React from 'react'

import { useStore } from '../routerStore'
import navigate from '../navigate'
import { LINK_SELECTED_CLASSNAME } from '../constant'

interface Props {
  to: string
  replace?: boolean | undefined
  activeClassName?: string
  [key: string]: any
}

function go(e: React.SyntheticEvent, to: string, replace: boolean): void {
  e.preventDefault()
  navigate(to, replace)
}

function getClassName(props: Props, currentPath: string): string {
  const { to, activeClassName, className } = props
  const isActive = currentPath === to
  const classes = []
  if (isActive) classes.push(activeClassName || LINK_SELECTED_CLASSNAME)
  if (props.className) classes.push(className)
  return classes.join(' ')
}

const Link: React.SFC<Props> = props => {
  const currentPath = useStore(S => S.currentPath)
  if (!currentPath) return null
  const { to, replace, className, activeClassName, ...restProps } = props
  return (
    <a
      href={to}
      onClick={e => go(e, to, !!replace)}
      className={getClassName(props, currentPath)}
      {...restProps}
    >
      {props.children}
    </a>
  )
}

export default Link
