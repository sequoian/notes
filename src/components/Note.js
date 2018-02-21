import React from 'react'

const Note = ({text, created, onClick}) => (
  <div onClick={onClick}>
    <span>{text || 'Blank Note'}</span>
    <span>{created}</span>
  </div>
)

export default Note