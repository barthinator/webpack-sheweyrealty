import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom'
import '../css/app.css'
import Main from "./Main"
import Footer from "./footer"
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navbarcollpase from './navbarcollpase'

export default class Hello extends Component {
  render() {

    document.body.style.backgroundColor = "#e5e5e5";
    document.body.style.color = "#032149";

    return (
      <div className="Hello">

      <Navbarcollpase/>


      <Main />

      <Footer/>

      </div>
    );
  }
}

render(<BrowserRouter><Hello /></BrowserRouter>, document.getElementById('app'));
