import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom'
import '../css/app.css'
import Main from "./Main"
import Footer from "./footer"
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

export default class Hello extends Component {
  render() {

    document.body.style.backgroundColor = "#e5e5e5";
    document.body.style.color = "#032149";

    return (
      <div className="Hello">


      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          <div className="navbar-brand logo"><Link to='/' className="link" style={{ textDecoration: 'none' }}>Shewey</Link></div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <div className="navbar-brand"><Link to='/' className="link">Home</Link></div>
              <div className="navbar-brand"><Link to='/agents' className="link">Agents</Link></div>
              <div className="navbar-brand"><Link to='/search' className="link">Listings</Link></div>
              <div className="navbar-brand"><a className="link" href='https://rentalmgmtinc.appfolio.com/connect'>Pay Rent</a></div>
              <div className="navbar-brand"><Link to='/contact' className="link">Contact</Link></div>
              <div className="navbar-brand"><Link to='/manage' className="link">Property Management</Link></div>
            </ul>
          </div>
        </div>
      </nav>


        <Main />

      <Footer/>

      </div>
    );
  }
}

render(<BrowserRouter><Hello /></BrowserRouter>, document.getElementById('app'));
