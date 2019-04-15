import React from 'react'
import { Link } from 'dahlia/router'

export default () => (
  <div>
    <Link to="/settings/profile">Profile</Link>
    <span> | </span>
    <Link to="/settings/account">Account</Link>
  </div>
)
