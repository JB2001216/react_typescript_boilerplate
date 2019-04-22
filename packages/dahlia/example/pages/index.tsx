import React from 'react'
import { modalStore } from '../dahlia/dahlia-modal'

export default () => (
  <div>
    Hi, Dahlia
    <button onClick={() => modalStore.open('user')}>open</button>
  </div>
)
