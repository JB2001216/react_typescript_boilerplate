import React from 'react'
import { drawerStore } from 'dahlia-drawer'

function close() {
  drawerStore.close('About')
}

export default () => (
  <div>
    Hi, Dahlia
    <button onClick={close}>close</button>
  </div>
)
