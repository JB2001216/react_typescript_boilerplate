import React  from 'react'
import { observe as run } from 'dahlia-observable'
import equal from 'fast-deep-equal'

export function observe(Comp: any) {
  const isSFC = !(Comp.prototype && Comp.prototype.isReactComponent)
  const BaseComp = isSFC ? React.Component : Comp

  return class extends BaseComp {
    constructor(props: any) {
      super(props)
      this.render = run(this.render, {
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
      return isSFC ? Comp(this.props, this.context) : super.render()
    }
  }
}
