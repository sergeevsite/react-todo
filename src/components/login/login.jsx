import React from 'react'
import { Form, Button, Container, Badge } from 'react-bootstrap'

const Login = ({ fields }) => {

  return (
    <Container>
      <Form>
        {fields}
        <Button variant="warning" type="submit">
          Войти
        </Button>
      </Form>
    </Container>
  )
}

export default Login
