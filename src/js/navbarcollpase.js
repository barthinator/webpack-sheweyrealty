import React from 'react'
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Badge, MenuItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IndexLinkContainer } from 'react-router-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



const Navbarcollpase = () => (
  <Navbar collapseOnSelect id="navbar">
  <div className="container">
    <Navbar.Header>
      <Navbar.Brand className="logo">
      <Link className="navbar-brand" to="/">Shewey</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse className="navbar-collapse">
      <Nav id="nav">
        <IndexLinkContainer activeClassName="link" className="link" exact to="/">
            <NavItem><div className="link">Home</div></NavItem>
        </IndexLinkContainer>
        <LinkContainer activeClassName="link" className="link" exact to="/agents">
              <NavItem><div className="link">Agents</div></NavItem>
        </LinkContainer>
        <LinkContainer activeClassName="link" className="link" exact to="/search">
            <NavItem><div className="link">Listings</div></NavItem>
        </LinkContainer>
        <LinkContainer activeClassName="link" className="link" exact to="/sales">
              <NavItem><div className="link">Homes for Sale</div></NavItem>
        </LinkContainer>
        <LinkContainer activeClassName="link" className="link" exact to="/manage">
            <NavItem><div className="link">Property Management</div></NavItem>
        </LinkContainer>
        <LinkContainer activeClassName="link" className="link" exact to="/contact">
              <NavItem><div className="link">Contact</div></NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Navbarcollpase;
