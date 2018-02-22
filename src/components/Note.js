import React from 'react'
import './Note.css'

const Note = ({text, created, onClick, onDelete}) => (
  <div className="note">
    <div onClick={onClick}>
      <span className="note-text">{text || 'Blank Note'}</span>
      <span className="note-date">{created}</span>
    </div>
    <button
      onClick={onDelete}
    >
      ×
    </button>
  </div>
)

export default Note