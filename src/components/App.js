import React, { Component } from 'react'
import Modal from './Modal'
import Editor from './Editor'
import NewNote from './NewNote'
import NoteList from './NoteList'

class App extends Component {
  render() {
    return (
      <div>
        <NewNote />
        <NoteList />
        <Modal>
          <Editor />
        </Modal>
      </div>
    )
  }
}

export default App