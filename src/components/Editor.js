import React from 'react'
import {connect} from 'react-redux'
import {editNote} from '../actions'

const Editor = ({id, text, onChange}) => (
  <div>
    <textarea
      onChange={e => 
        onChange(id, e.target.value)
      }
    >
      {text}
    </textarea>
  </div>
)

const getOpenedNote = (notes, editor) => {
  const noteId = editor.noteId
  if (!noteId) return undefined
  return notes.find(note => (
    note.created === noteId
  ))
}

const mapStateToProps = state => {
  const note = getOpenedNote()
  return {
    id: note.created,
    text: note.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (id, text) => {
      dispatch(editNote(id, text))
    }
  }
}

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)