import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './formState.scss';

class FormState extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <Grid fluid className="content_publish">
        <Row>
          <Col xs={12}>
            <textarea className="text_box" rows={3} placeholder="Escribe aquí tu estado"></textarea>
          </Col>
          <Col xs={12}>
            <Row end="xs">
              <Col xs={6}>
                <button className="button_publish">Publicar</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FormState;
