import React, { Component } from 'react'
import Modal from './Modal'
import Editor from './Editor'
import NewNote from './NewNote'
import NoteList from './NoteList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Notes</h1>
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