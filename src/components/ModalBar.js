import React from 'react'
import './ModalBar.css'

const ModalBar = ({onClose}) => (
  <div className="modal-bar">
    <button
      onClick={onClose}
    >
      ×
    </button>
  </div>
)

export default ModalBar