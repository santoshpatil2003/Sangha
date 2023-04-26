import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import './JoinCost.css'
import { joining, leave } from './profiledata';

export default function JoinCost(props) {

  const join = () =>{
    joining(props.uid,props.onHide,props.joined,props.joins);
  }

  const leaves = () =>{
    leave(props.foundername,props.sanghaname,props.uid,props.onHide,props.joined,props.joins);
  }


  if(props.join === false){
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.sanghaname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
              <div className='sanghadata2'>
                  <div className='left-data2'>
                      <div className='circle2'>
                          <img className='po2' src="https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg" alt="Girl in a jacket"/>
                      </div>
                  </div>
                  <div className='right-data2'>
                      <div className='nd2'>
                          <div className='sanghaname'><h4 className='SN2'>{props.sanghaname}</h4></div>
                          <div className='foundername'><span><h4 className='FN2'>By: {props.foundername}</h4></span></div>
                      </div>
                  </div>
              </div>
              </Col>
              <Col className='col' xs={6} md={4}>
                <h4 className='money'>250 Rs<span className='sp'>/mon</span></h4>
              </Col>
            </Row>
            <Row>
              
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className='B1' onClick={props.onHide}>Not today</Button>
          <Button className='B1' onClick={join}>Join</Button>
        </Modal.Footer>
      </Modal>
    );
  }else{
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.sanghaname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              {/* <Col className='col2' xs={10} md={7}>
                <div className='sanghadata2'>
                    <div className='left-data2'>
                        <div className='circle2'>
                            <img className='po2' src="https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg" alt="Girl in a jacket"/>
                        </div>
                    </div>
                    <div className='right-data2'>
                        <div className='nd2'>
                            <div className='sanghaname'><h4 className='SN2'>{props.sanghaname}</h4></div>
                            <div className='foundername'><span><h4 className='FN2'>By: {props.foundername}</h4></span></div>
                        </div>
                    </div>
                </div>
              </Col> */}
              <Col className='col' xs={6} md={10}>
                <h4 className='money2'>Are you sure, you want to Leave?</h4>
              </Col>
            </Row>
            <Row>
              
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className='B1' onClick={props.onHide}>No</Button>
          <Button className='B1' onClick={leaves}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
   
}

// function App() {
//   const [modalShow, setModalShow] = useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch modal with grid
//       </Button>

//       <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// }

// render(<App />);