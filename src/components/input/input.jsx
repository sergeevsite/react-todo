import React from 'react'
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap'

export const Input = () => {
  return (
    <Container>
      <InputGroup className="mt-5">
        <FormControl placeholder="Купить продуктов" />
        <InputGroup.Append>
          <Button variant="outline-warning">Добавить</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  )
}