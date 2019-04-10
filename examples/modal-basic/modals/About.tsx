import React from 'react'
import { modalStore } from 'dahlia/modal'

function close() {
  modalStore.close('About')
}

export default () => (
  <div>
    Hi, Dahlia
    <button onClick={close}>close</button>
  </div>
)
