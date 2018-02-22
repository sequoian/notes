import React, { Component } from 'react'
import Modal from './Modal'
import Editor from './Editor'
import NewNote from './NewNote'
import NoteList from './NoteList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
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