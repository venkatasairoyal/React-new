import React, { Component } from 'react'
import Message from './Message/Message'
export class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <hr />
        <Message/>
    </div>
    )
  }
}

export default App