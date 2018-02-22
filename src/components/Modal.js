import React from 'react'
import {connect} from 'react-redux'
import ReactModal from 'react-modal'
import {closeEditor} from '../actions'
import ModalBar from './ModalBar'

const Modal = ({isOpen, onClose, children}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    appElement={document.getElementById('root')}
  >
    <ModalBar 
      onClose={onClose}
    />
    {children}
  </ReactModal>
)

const mapStateToProps = state => {
  return {
    isOpen: state.editor.isOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(closeEditor())
  }
}

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer