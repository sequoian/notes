import React, { Component } from 'react'
import Modal from './Modal'
import Editor from './Editor'
import NewNote from './NewNote'

class App extends Component {
  render() {
    return (
      <div>
        <NewNote />
        <Modal>
          <Editor />
        </Modal>
      </div>
    )
  }
}

export default App