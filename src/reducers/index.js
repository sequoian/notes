import {combineReducers} from 'redux'
import notes from './notes'
import editor from './editor'

const notesApp = combineReducers({
  notes,
  editor
})

export default notesApp