import React, { Fragment } from 'react'
import { Modal } from 'antd'
import { observe } from 'dahlia-store'
import { modalStore } from './modalStore'
import { ModalConfig } from './typings'

const handleCancel = (name: string) => {
  modalStore.close(name)
}

const isVisible = (name: string) => {
  const { modals } = modalStore
  return modals[name] && modals[name].isOpen
}

export const Modals = observe<{ config: ModalConfig }>(({ config }) => {
  if (!config) return null
  return (
    <Fragment>
      {config.map(item => {
        const { name } = item
        const Current = item.component
        const props = {} as any
        if (Current.Title) props.title = <Current.Title />
        if (Current.Footer) props.footer = <Current.Footer />
        if (Current.onOk) props.onOk = Current.onOk
        if (Current.onCancel) props.onCancel = Current.onCancel
        return (
          <Modal
            visible={isVisible(name)}
            onCancel={() => handleCancel(name)}
            key={name}
            {...props}
          >
            <Current />
          </Modal>
        )
      })}
    </Fragment>
  )
})
