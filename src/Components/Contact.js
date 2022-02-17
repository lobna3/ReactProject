import React from 'react';


import { Button,Form } from 'react-bootstrap';


const Contact = () => {
    return (
        
        <div class="container mt-5 mb-5">
        <div class="row">
        <Form>
        <div className="col-md-6">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
    </div>
    <div className="col-md-6">
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
    </div>
  <>
  <div className="col-md-6">
  <Form.Group className="mb-3">
    <Form.Label>Disabled input</Form.Label>
    <Form.Control placeholder="Disabled input" disabled />
  </Form.Group>
  </div>
  <div className="col-md-6">
  <Form.Group className="mb-3">
    <Form.Label>Disabled select menu</Form.Label>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>
  </div>
  <div className="col-md-6">
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Can't check this" disabled />
  </Form.Group>
  </div>
</>
 <div className="col-md-6">  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  </div>
  <div className="col-md-6">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>
</div>
</div>

      );
}


export default Contact;