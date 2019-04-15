import React from 'react'
import { Link } from 'dahlia/router'

import './Nav.css'

export default () => (
  <div>
    <Link activeClassName="selected" to="/settings/profile">
      Profile
    </Link>
    <span> | </span>
    <Link activeClassName="selected" to="/settings/account">
      Account
    </Link>
  </div>
)
