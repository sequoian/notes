import React from 'react'
import {connect} from 'react-redux'
import {openEditor} from '../actions'
import Note from './Note'
import moment from 'moment'

const formatText = text => (
  // Use the first line as the text
  text.trim().split(/[\r\n]+/)[0]
)

const formatTime = time => (
  moment(time).calendar(null, {
    sameDay: '[Today]',
    lastDay: '[Yesterday]',
    lastWeek: 'M/DD/YYYY',
    sameElse: 'M/DD/YYYY',
  })
)

const NoteList = ({notes, onNoteClick}) => (
  <div>
    <ul>
      {notes.map(note => (
        <li key={note.created}>
          <Note
            text={formatText(note.text)}
            created={formatTime(note.created)}
            onClick={() => onNoteClick(note.created)}
          />
        </li>
      ))}
    </ul>
  </div>
)

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNoteClick: id => {
      dispatch(openEditor(id))
    }
  }
}

const NoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)

export default NoteListContainer