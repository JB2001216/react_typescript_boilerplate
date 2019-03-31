import React from 'react'
import { Button } from 'antd'
import { modalStore } from 'dahlia/modal'

import 'antd/dist/antd.css'

function open() {
  modalStore.open('About')
  console.log(modalStore)
}

export default () => (
  <div>
    Hi, Dahlia
    <div>
      <Button onClick={open}>Open</Button>
    </div>
  </div>
)
