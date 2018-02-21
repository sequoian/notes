import React, { Component } from 'react'
import Modal from './Modal'
import Editor from './Editor'

class App extends Component {
  render() {
    return (
      <div>
        <Modal>
          <Editor />
        </Modal>
      </div>
    )
  }
}

export default App