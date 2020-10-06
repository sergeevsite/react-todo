import React from 'react'
import { Container, Button, ButtonGroup, Col, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Input } from '../input/input';
import classes from './header.module.scss';

const Header = () => {

  return (
    <Jumbotron fluid className={classes.header}>
      <h2 className={classes.header__title}>DOLISTO</h2>
      <p className={classes.header__text}>Простой список твоих задач</p>
      
      <Input/>

      <Container className={classes.header__buttons}>
        <ButtonGroup>
          <Link to='/signup'>
            <Button variant="outline-warning">Регистрация</Button>
          </Link>
          <Link to='/signin'>
            <Button variant="outline-warning">Логин</Button>
          </Link>
        </ButtonGroup>
      </Container>

    </Jumbotron>
  )
}

export default Header
