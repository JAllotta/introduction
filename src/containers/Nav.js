import React from 'react'
import Form from 'react-bootstrap/Form';

function Nav() {
    return(
        <div className="nav">
            

        <Form>
          <Form.Group>
            <Form.Label>Enter your name</Form.Label>
            <Form.Control type="text" className="form-control"></Form.Control>            
          </Form.Group>
        </Form>
        </div>
    )
}

export default Nav;