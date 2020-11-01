import React from 'react'
import { Form, Button, Container, Badge } from 'react-bootstrap'

const Registration = ({ fields }) => {
  return (
    <Container>
      <Form>
        {fields}
        {/* <Form.Group controlId="form_name">
          <Form.Control type="text" placeholder="Имя" />
        </Form.Group>
        <Form.Group controlId="form_email">
          <Form.Control type="email" placeholder="Электронная почта" />
        </Form.Group>
        <Form.Group controlId="form_password">
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Form.Group controlId="form_repeat_password">
          <Form.Control type="password" placeholder="Повторите пороль" />
        </Form.Group> */}
        <Button variant="warning" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </Container>
  )
}

export default Registration
