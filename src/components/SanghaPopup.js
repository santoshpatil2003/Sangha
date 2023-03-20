import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { uploadtweet } from './profiledata';
// C:\Users\santo\OneDrive\Desktop\react app\my-app\node_modules\react-bootstrap
import './SanghaPopup.css'

export default function SanghaPopup(props) {
  let [head, heading] = useState("");
  let [body, bodytext] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

const uploa = () => {
  uploadtweet(head,body);
  props.handleClose();
}

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                className='textbox'
                onChange={(e) => {heading(head = e.target.value)}}
                placeholder="heading..."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Example textarea</Form.Label> */}
              <Form.Control onChange={(e) => {bodytext(body = e.target.value)}} as="textarea" placeholder="write something..." rows={3} className='textbox' /*autoFocus*/ />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button className='' onClick={props.handleClose}>
            Close
          </Button> */}
          <Button className='sendbutton' onClick={uploa}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);