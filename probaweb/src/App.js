import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Card, Container, CardGroup, Form, FormControl,Button, Row, Col } from 'react-bootstrap';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsGeoAlt } from 'react-icons/bs';
import { BsListCheck } from 'react-icons/bs';
import { AiOutlineInfoCircle } from "react-icons/ai"

function App() {
  return (
    <Container fluid style={{ backgroundImage: `url('https://images.unsplash.com/photo-1483401757487-2ced3fa77952?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://hsa.hu/wp-content/uploads/2021/02/HSA_logo-e1596540553919.png" style={{width:'150px',height:'56px',marginBottom: '20px',marginTop: '20px',marginRight: '20px'}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'white' }}>Állások</Nav.Link>
            <Nav.Link style={{ color: 'white' }}>|</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Munkavállalóknak</Nav.Link>
            <Nav.Link style={{ color: 'white' }}>|</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Rólunk</Nav.Link>
            <Nav.Link style={{ color: 'white' }}>|</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Cégeknek</Nav.Link>
            <Nav.Link style={{ color: 'white' }}>|</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Irodáink</Nav.Link>
            <Nav.Link style={{ color: 'white' }}>|</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>CV-generátor</Nav.Link>
            <Nav.Link style={{ color: 'white' }}>|</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Kapcsolat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Row>
        <Col sm={3}>
          <Card style={{ width: '400px',height:'400px', backgroundColor: '#00b26b',borderRadius: '0', marginLeft: '20px',marginBottom: '10px',}}>
            <Card.Title>Állások</Card.Title>
            <p>1</p>
            {/* Kártya tartalma */}
          </Card>
        <Form inline>
          <InputGroup className='bg-transparent' style={{width: '300px',color:'white', borderRadius: '0', borderWidth:'2px',marginBottom: '10px'}}>
              <InputGroup.Text className='bg-transparent' style={{ borderRight: 'none',borderRadius: '0',borderWidth: '2px', marginLeft:'20px' }}>
                  <BsListCheck size={24} color="white"/>
              </InputGroup.Text>
            <FormControl type="search" color="white" className='bg-transparent' placeholder="Mit keresel" style={{color:'white', borderLeft: 'none',borderRadius: '0',borderWidth:'2px' }} />
          </InputGroup>
        </Form>
        <Form inline>
          <InputGroup className='bg-transparent' style={{width: '300px',color:'white', borderRadius: '0', borderWidth:'2px'}}>
              <InputGroup.Text className='bg-transparent' style={{ borderRight: 'none',borderRadius: '0',borderWidth: '2px', marginLeft:'20px'}}>
                  <BsGeoAlt  size={24} color="white"/>
              </InputGroup.Text>
            <FormControl type="search" color="white" className='bg-transparent' placeholder="Hol keresel" style={{color:'white', borderLeft: 'none',borderRadius: '0',borderWidth:'2px' }} />
          </InputGroup>
          <Button variant="outline-success" style={{fontWeight: 'bold',width: '150px',color:'white', borderRadius: '0', borderWidth:'0px',backgroundColor:'#00b26b',marginTop: '10px', marginLeft:'20px'}}>Keresés</Button>
        </Form>
        </Col>
        <Col >
        <CardGroup>
          <Card style={{ width: '50px',height:'400px', backgroundColor: '#F5A32E',borderRadius: '0', marginBottom: '10px'}}>
            <Card.Title>Diplomásoknak</Card.Title>
            <p>2</p>
            {/* Kártya tartalma */}
          </Card>
          <Col >
          <Card style={{ width: '10rem',height:'6rem', backgroundColor: '#5EBE86',borderRadius: '0', marginRight: '5px'}}>
            <Card.Title>Munkavállalóknak</Card.Title>
             <p>3</p>
              {/* Kártya tartalma */}
            </Card>
          <Card style={{ width: '10rem',height:'6rem', backgroundColor: '#00b26b',borderRadius: '0', marginRight: '5px'}}>
          <Card.Title>Rólunk</Card.Title>
            <p>4</p>
            {/* Kártya tartalma */}
          </Card>
          </Col>
          <Card style={{ width: '10rem',height:'6rem', backgroundColor: '#00b26b',borderRadius: '0', marginRight: '5px'}}>
          <Card.Title>Kep</Card.Title>
            <p>5</p>
            {/* Kártya tartalma */}
          </Card>
        </CardGroup>
        </Col>
     </Row>
    <footer>
      <Navbar bg="dark" variant="dark" expand="lg" className="bg-transparent" >
        <Nav className="w-100 justify-content-end" style={{backgroundcolor: '#1A1F37'}}> 
          <Nav.Link href="#home" style={{ color: 'white' }}>© 2022 HSA Kft.  <AiOutlineInfoCircle size={24} style={{margin: '5px'}}/> </Nav.Link>
          <Nav.Link >|</Nav.Link>
          <Nav.Link href="#about" style={{ color: 'white' }}>DES&DEV: <strong>OUTCLASS™</strong></Nav.Link>
          <Nav.Link >|</Nav.Link>
          <Nav.Link href="#contact" style={{ color: 'white' }}>Adatvédelmi tájékoztató</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
    </Container>
    
  );
}

export default App;
