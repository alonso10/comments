import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { addComment, closeModal } from '../../redux/actions';

import './post.scss';

const NewComment = (props) => {

  const [ comment, setComment ] = useState("");

  const save = () => {
    const { postId, addComment, closeModal } = props;
    const content = {
      name: props.name,
      text: comment,
      date: moment().format('YYYY-MM-DD HH:mm:ss')
    };
    addComment(postId, content);
    closeModal();
  }

  return (
    <div>
      <textarea 
        className="box-comment"
        placeholder="Escribe tu comentario"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="button-comment" onClick={() => save()}>Guardar</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    postId: state.modal.postId,
    name: state.name
  };
}

export default connect(mapStateToProps, { addComment, closeModal })(NewComment);