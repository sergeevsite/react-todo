import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="success">Success</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
