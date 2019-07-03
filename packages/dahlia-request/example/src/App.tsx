import React, { Component } from 'react'
// import { request } from 'dahlia-request'
import { request } from '../../src'

class App extends Component {
  state = {
    data: '...',
  }
  async componentDidMount() {
    const data = await request('https://jsonplaceholder.typicode.com/todos/:id', {
      query: {
        foo: 'bar',
      },
      params: {
        id: 1,
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
