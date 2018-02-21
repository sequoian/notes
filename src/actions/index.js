export const addNote = text => {
  return {
    type: 'ADD_TASK',
    text: text || '',
    created: Date.now(),
  }
}

export const editNote = (id, text) => {
  return {
    type: 'EDIT_NOTE',
    id,
    text
  }
}

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}

export const openEditor = noteId => {
  return {
    type: 'OPEN_EDITOR',
    noteId
  }
}

export const closeEditor = () => {
  return {
    type: 'CLOSE_EDITOR'
  }
}