import React from 'react'
import { Drawers, DrawerConfig, drawerStore } from '../src'

import 'antd/dist/antd.css'

const About = () => (
  <span>
    about
    <button onClick={() => drawerStore.close('about')}>close</button>
  </span>
)

About.drawerProps = {
  title: 'haha',
  width: '80%',
}

const config: DrawerConfig = [
  {
    name: 'about',
    component: About,
  },
]

export default () => (
  <div>
    <Drawers config={config} />
    <span>Hi, Dahlia</span>
    <button onClick={() => drawerStore.open('about')}>open</button>
  </div>
)
