const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        {
          text: action.text,
          created: action.created
        },
        ...state
      ]
    case 'EDIT_NOTE':
      return state.map(note => 
        (note.created === action.id)
        ? {...note, text: action.text}
        : note
      )
    case 'DELETE_NOTE':
      return state.filter(note => 
        note.created !== action.id
      )
    default:
      return state
  }
}

export default notes