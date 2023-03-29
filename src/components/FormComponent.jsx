import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FormComponent({ handleData }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    fetch(`https://api.quotable.io/random`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "4mfcQiMUpW1870c+I4qjTg==yd726JhlQwBhuRkd",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        handleData(data);
        navigate("/quote", { state: data });
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <Row className="justify-content-center">
      <Col>
        <Form>
          <div className="d-flex align-items-center justify-content-between flex-column text-center">
            <p className="label">
              Generate the qoote on <b>random</b> topic
            </p>
            <Button
              className="submit-btn mb-5 mt-2 d-flex gap-2"
              onClick={handleSubmit}
            >
              {isLoading && <Spinner animation="grow" variant="dark" />}
              Generate
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
