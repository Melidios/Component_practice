import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Navibar extends Component {
  render(){

    return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Home</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#about">About me</NavItem>
        <NavItem eventKey={2} href="#portfolio">Portfolio</NavItem>
        <NavItem eventKey={3} href="#resume">Resume</NavItem>
        <NavItem eventKey={4} href="#footer">Contact</NavItem>
     </Nav>
    </Navbar>
  )}
}

export default Navibar
