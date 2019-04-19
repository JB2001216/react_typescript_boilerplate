import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { observable, observe } from './src'

const store = observable({
  count: 1,
  get num(): number {
    return store.count + 1
  },
  inc() {
    store.count++
  },
})

observe(() => {
  console.log(store.count)
  console.log('num:', store.num)
})

store.inc()
store.inc()
// store.count++

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
