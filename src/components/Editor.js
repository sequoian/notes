import React from 'react'
import {connect} from 'react-redux'
import {editNote} from '../actions'
import './Editor.css'

const Editor = ({id, text, onChange}) => (
  <div className="editor">
    <textarea
      value={text}
      onChange={e => 
        onChange(id, e.target.value)
      }
      autoFocus
    />
  </div>
)

const getOpenedNote = (notes, editor) => {
  const noteId = editor.noteId
  if (!noteId) return {}
  return notes.find(note => (
    note.created === noteId
  ))
}

const mapStateToProps = state => {
  const note = getOpenedNote(state.notes, state.editor)
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

export default EditorContainer