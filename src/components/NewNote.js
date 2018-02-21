import React from 'react'
import {connect} from 'react-redux'
import {openEditor, addNote} from '../actions'

const NewNote = ({onClick}) => (
  <div>
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