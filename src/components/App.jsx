import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../redux/actions';
import Content from './content';
import ModalContainer from '../widgets/modals/modalContainer';
import Modal from '../widgets/modals/modal';

import NewComment from './post/addComment';

function App(props) {
  const modalVisible = props.visible;

  return (
    <div className="App">
      <Content />
      {
        modalVisible && 
        <ModalContainer>
          <Modal handleClick={() => props.closeModal()} >
            <h2>Nuevo Comentario</h2>
            <NewComment />
          </Modal>
        </ModalContainer>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    visible: state.modal.visible
  }
}

export default connect(mapStateToProps, { closeModal })(App);
