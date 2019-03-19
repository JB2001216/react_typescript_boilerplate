import React, { ComponentType } from 'react'

import { observe as run } from 'dahlia-observable'
import equal from 'fast-deep-equal'

export function observe<P>(Comp: ComponentType<P>) {
  return class extends React.Component<P> {
    constructor(props: P) {
      super(props)
      this.render = run(this.render, {
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
      return <Comp {...this.props} />
    }
  }
}
