import React from 'react'
import { navigate } from '../src/index'

export default () => (
  <div>
    <div>
      <h1>About</h1>
      <span onClick={() => navigate('/users/json?age=10')}>
        navigate to user
      </span>
    </div>
  </div>
)
