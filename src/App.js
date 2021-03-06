import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Form,
  Nav,
  Container,
  Row,
  Col,
  ProgressBar,
  Table,
  Alert,
  Button,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { BsFillPencilFill, BsFillAlarmFill } from "react-icons/bs";
import Footer from "./Footer.jsx";
import Countdown from "react-countdown";

const But = ({ n }) => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return array.map((n) => {
    return (
      <Button variant="outline-dark" size="sm">
        {n}
      </Button>
    );
  });
};

const renderer = ({ hours, minutes, seconds }) => {
  var min = minutes;
  var sec = seconds;

  if (sec < 10 && min < 10) {
    return (
      <span>
        {hours}:0{minutes}:0{seconds}
      </span>
    );
  } else if (min < 10) {
    return (
      <span>
        {hours}:0{minutes}:{seconds}
      </span>
    );
  } else if (sec < 10) {
    return (
      <span>
        {hours}:{minutes}:0{seconds}
      </span>
    );
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

function App() {
  return (
    <div className="App">
      <Navbar expand="md" style={{ backgroundColor: "#001733" }} variant="dark">
        <Container className="ms-2">
          <Navbar.Brand href="#home" className="text-secondary fw-bold">
            ACADEMY CBT SAT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="p-1">
                <Button variant="outline-secondary">Prev</Button>
              </Nav.Link>
              <Nav.Link href="#home" className="p-1">
                <Button variant="outline-light">Next</Button>
              </Nav.Link>
            </Nav>
            <Nav.Link href="#home" className="p-1 ms-0">
              <Button variant="secondary">Tools</Button>
            </Nav.Link>
            <Nav.Link href="#home" className="p-1 ms-0">
              <Button variant="secondary">Clear</Button>
            </Nav.Link>
            <Nav.Link href="#home" className="p-1 ms-0">
              <Button variant="secondary">
                <BsFillPencilFill />
              </Button>
            </Nav.Link>
            <Nav.Link href="#home" className="p-1 ms-0">
              <Button variant="secondary">&#10060; End Section</Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mx-3">
        <>
          <div className="d-flex justify-content-end text-danger pe-4">
            {" "}
            <span className="text-dark">
              <BsFillAlarmFill /> Remaining &nbsp;
            </span>
            <Countdown date={Date.now() + 3610000} renderer={renderer} />
          </div>

          <div className="fw-bold mb-1 mx-0">PASSAGE I</div>

          <Row>
            <div className="col-sm-9 scrolly border-end border-danger">
              {/* <embed
                src="https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              ></embed> */}
              {/* 
              <object
                width="100%"
                height="100%"
                data="https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf"
              ></object> */}

              <iframe
                src="https://drive.google.com/file/d/14xUAfhLiG2AQR-jdNcjwT9ZYlA0ZaHZr/preview"
                width="100%"
                height="100%"
              ></iframe>
            </div>

            {/* <div className="col-sm-8 scrolly border-end border-danger">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </div> */}
            <div className="col-sm-3 scrolly mt-5 mt-md-0  ps-5">
              <Form>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"A. NO CHANGE"}
                      name={"myGroupName"}
                      className="mb-2"
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"B. This is answer B. "}
                      name={"myGroupName"}
                      className="mb-2"
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"C. This is answer C. "}
                      name={"myGroupName"}
                      className="mb-2"
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"D. This is answer D.  "}
                      name={"myGroupName"}
                      className="mb-2"
                    />
                  </div>
                ))}
              </Form>
            </div>
          </Row>
        </>
      </Container>

      <Navbar expand="lg" variant="light" bg="light" className="mb-3">
        <Container className="ms-2 d-inline">
          <But n={5} />
        </Container>
      </Navbar>

      <Footer />
    </div>
  );
}

export default App;
document.body.style = "background: #F5F5F5;";
