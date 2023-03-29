import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function Quote() {
  const location = useLocation();
  const quote = location.state;

  const [displayContent, setDisplayContent] = useState("");
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayContent(quote.content.slice(0, currentIndex + 1));
      if (currentIndex === quote.content.length - 1) clearInterval(intervalId);
      currentIndex++;
    }, 50);
    return () => clearInterval(intervalId);
  }, [quote.content]);

  return (
    <Container
      className="py-4 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col className="quotation d-flex flex-column align-items-center">
          {quote && (
            <div>
              <p className="pseudo-content">"{quote.content}"</p>
              <p className="content">"{displayContent}"</p>
              <p className="text-center ">-{quote.author}</p>
            </div>
          )}
          <NavLink to="/">
            <Button className="submit-btn">Go back</Button>
          </NavLink>
        </Col>
      </Row>

      <div className="image d-flex">
        <img src="turtle.png" alt="turtle" className="w-30" />
        <img src="turtle.png" alt="turtle" className="w-30" />
        <img src="turtle.png" alt="turtle" className="w-30" />
      </div>
    </Container>
  );
}
