import React from "react";
import "../Css/Education.css";
import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <div class="education-page">
      <Container>
        <div class="glass">
          <div className="education-divs">
            <p>North Maharashtra University,Jalgaon</p>
            <p>2022-2024</p>
            <p>MCA</p>
            <p>80%</p>
          </div>
        </div>
      </Container>
      <Container>
        <div class="glass">
          <div className="education-divs">
            <p>North Maharashtra University,Jalgaon</p>
            <p>2018-2021</p>
            <p>BSC Computer</p>
            <p>82.63%</p>
          </div>
        </div>
      </Container>
      <Container>
        <div class="glass">
          <div className="education-divs">
            <p>Nashik Divisional Board</p>
            <p>2017</p>
            <p>HSC</p>
            <p>61.38%</p>
          </div>
        </div>
      </Container>
      <Container>
        <div class="glass">
          <div className="education-divs">
            <p>Nashik Divisional Board</p>
            <p>2015</p>
            <p>SSC</p>
            <p>73.20%</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
