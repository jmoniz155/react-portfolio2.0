import React from "react";
import "../styles/style.css";
import { Container, Row, Col } from "react-bootstrap";
import html from "./html.png";
import css3 from "./css3.png";
import javascript from "./javascript.png";
import jquery from "./jquery.png";
import node from "./node.png";
import github from "./github.png";
import mongodb from "./mongodb.png";
import bootstrap from "./bootstrap.png";
import headshot from "./jm.jpg"


const About = () => (
  <Container fluid="md" className="container">
    <div className="name">
      <Row className="row">
        <div className="col-md-6">
          <section>
            <h1 style={{ fontSize: 75 }}>Jesse Moniz</h1>
          
          </section>
 
        </div>
        <div className="col-md-6">
        <img className="logo headLogo" src={headshot} alt="gears" width="120px" border-radius="50%"/>
          <div className="img-cropper"></div>
        </div>
      </Row>
    </div>
    <Row className="row">
      <Col>
        
          <Container>
          <Row className="icons" md={6}>
            <img className="logo techLogo" src={html} alt="gears" width="80%" />
            <img className="logo techLogo" src={css3} alt="gears" width="80%" />
            <img className="logo techLogo" src={javascript} alt="gears" width="80%" />
            <img className="logo techLogo" src={jquery} alt="gears" width="80%" />
            <img className="logo techLogo" src={node} alt="gears" width="80%" />
            <img className="logo techLogo" src={github} alt="gears" width="80%" />
            <img className="logo techLogo" src={mongodb} alt="gears" width="80%" />
            <img className="logo techLogo" src={bootstrap} alt="gears" width="80%" />
          </Row>
          </Container>
       
      </Col>
      <div className="col-md-5">
        <section>
          <p style={{ textAlign: "center", marginTop: 50, marginRight: 50 }}>
           A student attending full time bootcamp at UCSD. Graduating Dec. 7, 2021
          </p>
        </section>
      </div>
    </Row>
  </Container>
);

export default About;
