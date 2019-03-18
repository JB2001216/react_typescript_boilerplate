import React, { Fragment } from 'react'
import { observe } from '@nx-js/observer-util'
import equal from 'fast-deep-equal'

export class Observer extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.render = observe(this.render, {
      scheduler: () => this.setState({}),
      lazy: true,
    })
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    const { props, state } = this
    if (
      super.shouldComponentUpdate &&
      !super.shouldComponentUpdate(nextProps, nextState, this.context)
    ) {
      return false
    }

    if (state !== nextState) return true

    return !equal(props, nextProps)
  }

  render() {
    const { children } = this.props
      if (typeof children !== 'function') throw 'Observer requires a function as children'
    return <Fragment>{children()}</Fragment>
  }
}
