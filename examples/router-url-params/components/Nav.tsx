import React from 'react'

import { Link } from 'dahlia/router'

export default () => (
  <div>
    <Link to="/">Home</Link>
    <br />
    <Link to="/users/Jordan">Jordan</Link>
    <br />
    <Link to="/users/James">James</Link>
  </div>
)
