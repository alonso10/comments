import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import moment from 'moment';
import { addPost } from '../../redux/actions';
import './formState.scss';

class FormState extends Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    const { target: { value} } = event;
    this.setState({ text: value });
  }

  addState = () => {
    const { text } = this.state;
    this.props.addPost({
      text,
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
      name: "Erian Rincon"
    });
  }

  render() {
    return (
      <Grid fluid className="content_publish">
        <Row>
          <Col xs={12}>
            <textarea
              className="text_box" 
              rows={3} 
              placeholder="Escribe aquí tu estado"
              onChange={this.handleChange}
            ></textarea>
          </Col>
          <Col xs={12}>
            <Row end="xs">
              <Col xs={6}>
                <button className="button_publish" onClick={ () => this.addState() }>Publicar</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(null, { addPost })(FormState);
