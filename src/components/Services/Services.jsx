import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

import finshingWorksIcon from "../../asset/image/finshing-works.png";
import contractingIcon from "../../asset/image/contracting.png";
import trainingIcon from "../../asset/image/training.png";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
        <h1 className="serviceMainTitle">OUR SERVICES</h1>
        <div className="bottomUnderline"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="contractingIcon" src={contractingIcon} alt="contractingIcon"/>
                <h2 className="serviceName">General contracting</h2>
                <p className="serviceDescription">We deal with comprehensive implementation of investments, starting from the preparation of the investment process, through the implementation of the project, ending with obtaining a permit to use the completed facility</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="finshingWorksIcon" src={finshingWorksIcon} alt="finshingWorksIcon"/>
                <h2 className="serviceName">Comprehensive finishing works</h2>
                <p className="serviceDescription">Renovation services consisting in comprehensive finishing of premises and facilities based on the best technologies and materials that have been approved by the investor</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="trainingIcon" src={trainingIcon} alt="trainingIcon"/>
                <h2 className="serviceName">Training sessions</h2>
                <p className="serviceDescription">We organize trainings for people who want to learn in the field of construction work</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
