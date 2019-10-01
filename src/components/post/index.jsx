import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-flexbox-grid';
import './post.scss';
import imageProfile from '../../resources/image/profile.png';

class Post extends React.Component {
  
  render() {
    const { posts } = this.props;
    return (
      <React.Fragment>
        {
          posts.map(post => {
            return (
              <div className="post-content">
                <Grid fluid>
                  <Row>
                    <Col xs={2} md={1}>
                      <img className="image" src={imageProfile} />
                    </Col>
                    <Col xs={10} md={11}>
                      <Row>
                        <Col xs={12}>
                          <div>
                            <p className="post-name">
                              { post.name }
                            </p>
                            <p className="post-date">
                              { post.date }
                            </p>
                          </div>
                        </Col>
                        <Col xs={12}>
                          <div> {post.text} </div>
                        </Col>
                        <Col xs={12}>
                          <div className="actions-post">
                            <button className="button-post">Reaccionar</button>
                            <button className="button-post">Comentar</button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Grid>
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }

}

function mapStateToProps(state, props) {
  return {
    posts: state
  };
}

export default connect(mapStateToProps)(Post);