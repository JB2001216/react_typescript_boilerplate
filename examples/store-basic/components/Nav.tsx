import React from 'react'
import { Link } from 'dahlia/router'

export default () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/async">Async</Link>
    </li>
  </ul>
)
