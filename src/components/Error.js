import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

export default function Error({ error }) {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="col-12 col-md-12">
            <Card>
              <div className="text-center">
                <h4>Oops! something went wrong!</h4>
                <p>{error.data.error}</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
