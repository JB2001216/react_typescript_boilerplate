import React from 'react'
import { Button } from 'antd'
import { drawerStore } from 'dahlia/drawer'

export default () => (
  <div>
    Hi, Dahlia
    <Button onClick={() => drawerStore.open('About')}>open</Button>
  </div>
)
