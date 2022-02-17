import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './App.css';
import Form from './Components/Form';
import Page1  from './Components/Page1';
import Page from './Components/Page';
import Home  from './Components/Home';
import Contact from './Components/Contact';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import your route components too

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">React App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/page">Page</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/form">Form</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
<div>
  <Routes>
    <Route path="/page" element={<Page/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/about" element={<Page1/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
</div>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
