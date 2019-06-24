import React from 'react'
import { drawerStore } from 'dahlia-drawer'

function open() {
  drawerStore.open('About')
}

export default () => (
  <div>
    Hi, Dahlia
    <div>
      <button onClick={open}>Open</button>
    </div>
  </div>
)
