import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

export default function History(props) {
  return (
    <>
      <Container className="mt-5">
        <h4 className="mb-5">Histories</h4>
        <Row clasName="g-3">
          <Col className="col-md-12">
            <Card clasName="card">
              <table className="table">
                <thead>
                  <tr>
                    <th>Original URL</th>
                    <th>Short URL</th>
                    <th>Alternative URL</th>
                    <th>QR Code</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>XXX</td>
                    <td>XXX</td>
                    <td>XXX</td>
                    <td>XXX</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
