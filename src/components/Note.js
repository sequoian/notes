import React from 'react'

const Note = ({text, created, onClick, onDelete}) => (
  <div>
    <div onClick={onClick}>
      <span>{text || 'Blank Note'}</span>
      <span>{created}</span>
    </div>
    <button
      onClick={onDelete}
    >
      Delete
    </button>
  </div>
)

export default Note