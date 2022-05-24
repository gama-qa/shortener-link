import React, { useState } from "react";
import axios from "axios";
// import "./Home.css";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Home(props) {
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState();

  const isValidURL = () => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(link);
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult();
    setError();

    try {
      if (!isValidURL()) {
        const err = {
          data: { error: "Please input a valid URL!" },
        };
        setError(err);
        setIsLoading(false);
        return;
      }
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      console.log(response.data);
      setResult(response.data.result);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Container className="mt-5">
        <Row clasName="g-3">
          <Col className="col-md-6 col-sm-12 offset-3">
            <Card clasName="card">
              <div className="text-center mb-3">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/web-basics-color-vol-05/512/qr_code_scan_scanner_tech-512.png"
                  alt="Logo QR"
                  width={120}
                />
                <br />
                <br />
                <small>QR Code and URL Shortener Generator</small>
              </div>
              <form onSubmit={submit}>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    required
                  />
                </div>

                <div className="form-group mt-3 d-grid">
                  <button type="submit" className="btn btn-primary ">
                    Generate
                  </button>
                </div>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>

      {result && (
        <Container className="mt-5 mb-5">
          <Row clasName="g-3">
            <Col className="col-md-6 offset-3">
              <Card clasName="card">
                <div className="text-center mb-3">
                  <small>Result : </small>
                  <br />
                  <br />
                  <img
                    src={`https://qrtag.net/api/qr_transparent_6.svg?url=${result.original_link}`}
                    alt="Logo QR"
                    width={120}
                  />
                </div>
                <ul className="list-group mt-3" style={{ fontSize: "small" }}>
                  <li className="list-group-item">
                    Short URL :{" "}
                    <a href={result.full_short_link}>{result.short_link}</a>
                  </li>
                  <li className="list-group-item">
                    Alternative URL :{" "}
                    <a href={result.full_short_link}>{result.short_link2}</a>
                  </li>
                  <li className="list-group-item">
                    Original URL :{" "}
                    <a href={result.original_link}>{result.original_link}</a>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      {isLoading && !result && <Loading />}

      {error && <Error error={error} />}
    </>
  );
}
