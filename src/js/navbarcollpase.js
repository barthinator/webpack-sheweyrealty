import React from 'react'
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Badge, MenuItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbarcollpase = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand className="logo">
        <a><Link to='/' className="link header">Shewey</Link></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse className="navbar-collapse">
      <Nav>
        <NavItem eventKey={1}><Link to='/' className="link">Home</Link></NavItem>
        <NavItem eventKey={2}><Link to='/agents' className="link">Agents</Link></NavItem>
        <NavItem eventKey={3}><Link to='/search' className="link">Listings</Link></NavItem>
        <li><a className='link' href="https://rentalmgmtinc.appfolio.com/connect">Pay Rent</a></li>
        <NavItem eventKey={5}><Link to='/contact' className="link">Contact</Link></NavItem>
        <NavItem eventKey={6}><Link to='/manage' className="link">Property Management</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navbarcollpase;
