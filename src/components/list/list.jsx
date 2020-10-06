import React from 'react'
import { Button, Badge, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'
import classes from './list.module.scss'

export const List = () => {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item className={classes.list__item}>
          <Row>
            <Col md={10}>
              <Row>
                <Col>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, fuga. Quo molestiae repellat omnis nulla.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge variant="secondary">6 октября</Badge>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <Row>
                <Col md={6}>
                  <Button variant='warning'>
                    <FontAwesomeIcon icon='edit' />
                  </Button>
                </Col>
                <Col md={6}>
                  <Button variant='danger'>
                    <FontAwesomeIcon icon='trash' />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}
