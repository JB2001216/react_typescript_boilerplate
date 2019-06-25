import React from 'react'
import { drawerStore } from 'dahlia-drawer'

import 'antd/dist/antd.css'

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
