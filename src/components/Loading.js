import React from "react";
import "./Loading.css";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

export default function Loading(props) {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row clasName="g-3">
          <Col className="col-md-6 offset-3">
            <Card clasName="card">
              <div className="text-center mb-3">
                <div className="title-result loading"></div>
                <br />
                <div className="qr-result loading"></div>
              </div>
            </Card>
            <ul className="list-group mt-3" style={{ fontSize: "small" }}>
              <li className="list-group-item-load loading"></li>
              <li className="list-group-item-load loading"></li>
              <li className="list-group-item-load loading"></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
