import React from 'react'
import { Link } from '../src'

export const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/friends">Friends</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
  </div>
)
