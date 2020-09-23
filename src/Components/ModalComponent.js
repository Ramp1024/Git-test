import { FormGroup } from '@material-ui/core';
import React, { Component, useState } from 'react';
import { Row, Col, Button, Form, Modal } from 'react-bootstrap';

import "./ModalComponent.css"
 

const ModalComponent = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (

    <div>
      <Button onClick={toggle}>Submit a Comment</Button>
      <Modal show={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
            toggle={toggle} className="">
        <Modal.Header toggle={toggle}>Submit a Comment</Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated}
            onSubmit={handleSubmit}>
                <Row form>
                    <Col md={6}>
                        <Form.Group controlId="validationCustom1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                required
                                type="text"  
                                className="firstname_input"
                                placeholder="FirstName"
                                />
                            <Form.Control.Feedback>Your First Name looks good</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className="label_name" >Last Name</Form.Label>
                            <Form.Control 
                                required
                                type="text" 
                                className="lastname_input"  
                                placeholder="LastName" 
                                />
                            <Form.Control.Feedback>Your Last Name is cool</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label className="label_select" >Ratings</Form.Label>
                    <Form.Control 
                        required
                        as="select" 
                        name="select" 
                        className="select_input"
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please give us your Ratings</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label_comment">Comment</Form.Label>
                    <Form.Control 
                        required
                        as="textarea" 
                        rows="3" 
                        className="comment_input"  
                        placeholder="abcdefghijk" 
                    />
                    <Form.Control.Feedback>Thanks for your Comments</Form.Control.Feedback>
                </Form.Group>
            </Form>  
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;

