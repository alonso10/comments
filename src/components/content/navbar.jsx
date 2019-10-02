import React, { useState } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { addName } from '../../redux/actions';

import "./content.scss";

const NavBar = (props) => {
  const [ name, setName ] = useState("");

  const save = () => {
    if (name !== "") {
      props.addName(name);
    }
  };

  return(
    <div className="topnav">
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <Row start="md">
              <Col xs={12}>
                <div className="title">
                  Domicilios Test
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row end="md">
              <Col xs={12}>
                <div className="content-input">
                  {
                    props.name === "" ? 
                    (
                      <div>
                        <input placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} value={name} />
                        <button onClick={() => save()}>Ingresar</button>
                      </div>
                    ) : <p>Hola!, {props.name}</p>
                  }
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, { addName })(NavBar);