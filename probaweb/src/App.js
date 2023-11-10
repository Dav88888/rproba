import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Card, Container, CardGroup, Form, FormControl,Button } from 'react-bootstrap';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsGeoAlt } from 'react-icons/bs';
import { BsListCheck } from 'react-icons/bs';


import { BsSearch } from 'react-icons/bs';
import { IconName } from "react-icons/bs";


function App() {
  return (
    <Container fluid style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613375920388-f1f70f341f8a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://hsa.hu/wp-content/uploads/2021/02/HSA_logo-e1596540553919.png" style={{  width:'150px',height:'56px',}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'white' }}>Állások</Nav.Link>
            |
            <Nav.Link href="#link" style={{ color: 'white' }}>Munkavállalóknak</Nav.Link>
            |
            <Nav.Link href="#link" style={{ color: 'white' }}>Rólunk</Nav.Link>
            |
            <Nav.Link href="#link" style={{ color: 'white' }}>Cégeknek</Nav.Link>
            |
            <Nav.Link href="#link" style={{ color: 'white' }}>Irodáink</Nav.Link>
            |
            <Nav.Link href="#link" style={{ color: 'white' }}>CV-generátor</Nav.Link>
            |
            <Nav.Link href="#link" style={{ color: 'white' }}>Kapcsolat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CardGroup>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
      </CardGroup>
      <Form inline>
        <InputGroup className='bg-transparent' style={{width: '300px',color:'white', borderRadius: '0', borderWidth:'2px',marginBottom: '10px'}}>
            <InputGroup.Text className='bg-transparent' style={{ borderRight: 'none',borderRadius: '0',borderWidth: '2px' }}>
                <BsListCheck size={24} color="white"/>
            </InputGroup.Text>
          <FormControl type="search" color="white" className='bg-transparent' placeholder="Mit keresel" style={{color:'white', borderLeft: 'none',borderRadius: '0',borderWidth:'2px' }} />
        </InputGroup>
      </Form>
      <Form inline>
        <InputGroup className='bg-transparent' style={{width: '300px',color:'white', borderRadius: '0', borderWidth:'2px'}}>
            <InputGroup.Text className='bg-transparent' style={{ borderRight: 'none',borderRadius: '0',borderWidth: '2px' }}>
                <BsGeoAlt  size={24} color="white"/>
            </InputGroup.Text>
          <FormControl type="search" color="white" className='bg-transparent' placeholder="Hol keresel" style={{color:'white', borderLeft: 'none',borderRadius: '0',borderWidth:'2px' }} />
        </InputGroup>
        <Button variant="outline-success" style={{fontWeight: 'bold',width: '150px',color:'white', borderRadius: '0', borderWidth:'0px',backgroundColor:'#00b26b',marginTop: '10px'}}>Keresés</Button>
      </Form>
    <footer>
      <Navbar bg="dark" variant="dark" expand="lg" className="bg-transparent" >
        <Nav className="w-100 justify-content-end" style={{backgroundcolor: '#1A1F37'}}> 
          <Nav.Link href="#home">Kezdőlap |</Nav.Link>
          <Nav.Link href="#about">Rólunk |</Nav.Link>
          <Nav.Link href="#contact">Kapcsolat</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
    </Container>
    
  );
}

export default App;
