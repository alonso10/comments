import React from "react";
import { connect } from "react-redux";
import Publication from './content';

class Post extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Publication posts={this.props.posts} />
      </React.Fragment>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.post.publications
  };
}

export default connect(mapStateToProps)(Post);