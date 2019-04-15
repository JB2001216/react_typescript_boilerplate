import React, { FunctionComponent } from 'react'
import Nav from '@components/Nav'

const Settings: FunctionComponent = ({ children }) => (
  <div>
    <h1>Settings</h1>
    <Nav />
    {children}
  </div>
)

export default Settings
