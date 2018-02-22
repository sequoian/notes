import React from 'react'
import {connect} from 'react-redux'
import {openEditor, addNote} from '../actions'
import './NewNote.css'

const NewNote = ({onClick}) => (
  <div className="new-note">
    <button
      onClick={onClick}
    >
      New Note
    </button>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      // create a new empty note, then open that note in the editor
      const action = dispatch(addNote())
      dispatch(openEditor(action.created))
    }
  }
}

const NewNoteContainer = connect(
  null,
  mapDispatchToProps
)(NewNote)

export default NewNoteContainer