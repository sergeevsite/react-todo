import React from 'react'
import { Form, Button, Container, Badge } from 'react-bootstrap'

const AuthForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Электронная почта" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Войти
        </Button>
      </Form>
    </Container>
  )
}

export default AuthForm
