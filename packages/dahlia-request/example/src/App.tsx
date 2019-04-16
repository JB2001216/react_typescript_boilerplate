import React, { Component } from 'react'
import { request } from 'dahlia-request'

class App extends Component {
  state = {
    data: '...',
  }
  async componentDidMount() {
    // const f = await fetch('https://jsonplaceholder.typicode.com/todos/1', {})
    // const j = await f.json()
    // console.log('f:')
    const data = await request('https://jsonplaceholder.typicode.com/todos/1', {
      query: {
        foo: 'bar',
      },
    })
    console.log('data:', data)
    this.setState({ data })
  }

  render() {
    return <pre className="App">{JSON.stringify(this.state.data, null, 2)}</pre>
  }
}

export default App
