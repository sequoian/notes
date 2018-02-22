import React from 'react'

const ModalBar = ({onClose}) => (
  <div>
    <button
      onClick={onClose}
    >
      X
    </button>
  </div>
)

export default ModalBar