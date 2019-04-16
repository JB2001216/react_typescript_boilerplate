import React, { Component } from 'react'

import { query } from '../../src'
import gql from 'gql-tag' // editor helper

class App extends Component {
  state = {
    data: '...',
  }
  async componentDidMount() {
    const GET_PERSONS = gql`
      {
        allPersons {
          id
          name
        }
      }
    `

    const endpoint = 'https://api.graph.cool/simple/v1/swapix'

    const data = await query(endpoint, GET_PERSONS)
    console.log('data:', data)
    this.setState({ data })
  }

  render() {
    return <pre className="App">{JSON.stringify(this.state.data, null, 2)}</pre>
  }
}

export default App
