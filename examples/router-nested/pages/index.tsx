import React from 'react'
import { Link } from 'dahlia/router'

const Home = () => (
  <div className="home">
    <Link to="/settings/profile">Go to Settings</Link>
  </div>
)

export default Home
