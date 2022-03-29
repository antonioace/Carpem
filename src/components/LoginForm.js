
import { Row, Col, Button, Form } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
function LoginForm() {

    const submitHandler = (e) => {
        e.preventDefault();
    
    
      };
    

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
  return (
    <FormContainer>
      <h1>Carpen </h1>

     

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Iniciar sesion
        </Button>

       
      </Form>

      <Row className="">
        <Col>
        <Button type="submit" variant="primary" className="mt-3">
          Registrarse
        </Button>
          
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginForm