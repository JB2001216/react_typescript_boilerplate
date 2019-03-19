import React, { Fragment } from 'react'
import { observe } from 'dahlia-observable'

export class Observer extends React.Component {
  constructor(props: any) {
    super(props)

    observe(this.render, {
      scheduler: () => this.setState({}),
      lazy: true,
    })
  }

  render() {
    const { children } = this.props
    if (typeof children === 'function') return children()
    return <Fragment>{children}</Fragment>
  }
}
