import React from 'react'

import { Link, navigate } from '../src/index'

import moment from 'moment'
console.log(moment(new Date()))

export default () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <h1>About</h1>
      <span onClick={() => navigate('/users/json?age=10')}>navigate to user</span>
    </div>
  </div>
)
