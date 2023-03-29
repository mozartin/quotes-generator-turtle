import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "./FormComponent";

export default function Home({ handleData }) {

  return (
    <Container
      className="py-4 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="header custom-card">
      <img src="decoration.png
      " alt="turtle" className="decor" />
        <Row className="py-4">
          <Col className="text-center">
            <header>
              <h1 className="pt-3">WiseTurtle</h1>
              <h2 className="pt-3">Discover insightful quotes at random!</h2>
            </header>
          </Col>
        </Row>
        <FormComponent handleData={handleData}/>
      </div>

      <div className="image d-flex">
        <img src="turtle.png" alt="turtle" className="w-30" />
        <img src="turtle.png" alt="turtle" className="w-30" />
        <img src="turtle.png" alt="turtle" className="w-30" />
      </div>
    </Container>
  );
}
