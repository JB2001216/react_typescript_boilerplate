import React, { Props } from 'react'
import { observe as run } from 'dahlia-observable'
import equal from 'fast-deep-equal'

export function observe(WrappedComponent: any) {
  return class extends React.Component {
    constructor(props: Props<any>) {
      super(props)

      run(this.render, {
        scheduler: () => this.setState({}),
        lazy: true,
      })
    }

    render() {
      return <WrappedComponent {...this.props} />
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
  }
}
