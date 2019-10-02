import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions';
import { handleDate } from '../../helpers';
import Comment from './comments';
import './post.scss';
import imageProfile from '../../resources/image/profile.png';

const Publication = (props) => {

  const addComment = (postId) => {
    props.openModal(postId);
  };

  return (
    <div>
      {
        props.posts.map(post => {
          const date = handleDate(post.date);
          return (
            <div className="post-content" key={post.id}>
              <Grid fluid className="post">
                <Row>
                  <Col xs={2} md={1}>
                    <img className="image" src={imageProfile} alt="Profile" />
                  </Col>
                  <Col xs={10} md={11}>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <p className="post-name">
                            { post.name }
                          </p>
                          <p className="post-date">
                            { date }
                          </p>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div> {post.text} </div>
                      </Col>
                      <Col xs={12}>
                        <div className="actions-post">
                          <button className="button-post">Reaccionar</button>
                          <button className="button-post" onClick={() => addComment(post.id)}>Comentar</button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Grid>
              <Comment comments={post.comments} reactions={post.reactions} />
            </div>
          );
        })
      }
    </div>
  );
}

export default connect(null, { openModal })(Publication);
