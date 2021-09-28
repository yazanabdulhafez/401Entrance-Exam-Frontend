import React, { Component } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>updating fav fruit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.updateData(e)}>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => this.props.setName(e)}
                  defaultValue={this.props.element.name}
                  type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  defaultValue={this.props.element.image}
                  onChange={(e) => this.props.setImageUrl(e)} type="text" placeholder="Enter Image Url" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  defaultValue={this.props.element.price}
                  onChange={(e) => this.props.setPrice(e)} type="number" placeholder="Enter Price" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default UpdateForm;
