import React from 'react'
import { modalStore } from 'dahlia/modal'

function open() {
  modalStore.open('About')
}

export default () => (
  <div>
    Hi, Dahlia
    <div>
      <button onClick={open}>Open</button>
    </div>
  </div>
)
