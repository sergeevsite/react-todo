import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/login/login'
import Registration from '../components/registration/registration'
import { Form, Button, Container, Badge } from 'react-bootstrap'

class Auth extends Component {

  renderForms(key) {
    return this.props.formsControl[key].map((field, i) => {
      return (
        <Form.Group controlId={field.id} key={field.id + i}>
          <Form.Control type={field.type} placeholder={field.placeholder} />
        </Form.Group>
      )
    })
  }
   
  render() {
    return (
      <>
        <Login fields={this.renderForms('loginControl')} />
        <Registration fields={this.renderForms('regControl')} />
      </>
    )
  }
}

const mapStateToProps = ({ formsControl }) => {
  return {
    formsControl
  }
}

export default connect(mapStateToProps, null)(Auth)