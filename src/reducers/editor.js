const defaultState = {
  isOpen: true,
  noteId: null
}

const editor = (state = defaultState, action) => {
  switch (action.type) {
    case 'OPEN_EDITOR':
      return {
        isOpen: true,
        noteId: action.noteId
      }
    case 'CLOSE_EDITOR':
      return {
        isOpen: false,
        noteId: null
      }
    default:
      return state
  }
}

export default editor