import React, { Fragment } from 'react'
import { observe } from 'dahlia-observable'
import equal from 'fast-deep-equal'

export class Observer extends React.Component {
  constructor(props: any) {
    super(props)

    this.render = observe(this.render, {
      scheduler: () => this.setState({}),
      lazy: true,
    })
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    const { props, state } = this
    if (state !== nextState) return true
    return !equal(props, nextProps)
  }

  render() {
    const { children } = this.props
    if (typeof children === 'function') return <Fragment>{children()}</Fragment>
    throw new Error(
      'Required a funcion as Children, eg: <Observer>{() => <span>{counterStore.count}</span>}</Observer>',
    )
  }
}
