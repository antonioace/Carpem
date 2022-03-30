
import { Row, Col, Button, Form,Container } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
function LoginForm() {

  
    return (
      <>
          <Container>
              <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">CARPEN USER</h1>
              <Row className="mt-5">
                  <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                      <Form>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                          </Form.Group>

                          <Button className="my-3"variant="success btn-block" type="submit">
                              Login
                          </Button>
                      </Form>
                  </Col>
              </Row>
              <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022</h6>
          </Container>
      </>
  );
    
}

export default LoginForm