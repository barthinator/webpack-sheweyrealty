import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/agents.css'
import Avatar from '../assets/avatar.png'
import Candace from '../assets/candace.jpg'
import Phillip from '../assets/phillip.jpg'
import Jerry from '../assets/jerry.jpg'

class Agents extends Component {

  render() {

    return (
      <div className="Agents">

      <div className="jumbotron employee-header">
        <h1>Agents</h1>
        <p>Below are some of our agents.</p>
      </div>

      <div className="jumbotron employees">

        <div className="card">
          <img src={Phillip} alt="Avatar" className="img-employee"/>
          <div className="container">
            <h4>Phillip Snowberger</h4>
            <p>Realtor</p>
          </div>
        </div>

        <div className="card">
          <img src={Candace} alt="Avatar" className="img-employee"/>
          <div className="container">
            <h4>Candace Bartholomew</h4>
            <p>(209)-777-8441</p>
            <p>Realtor</p>
          </div>
        </div>

        <div className="card">
          <img src={Avatar} alt="Avatar" className="img-employee"/>
          <div className="container">
            <h4>Celina Garcia</h4>
            <p>(209)-631-2818</p>
            <p>Realtor</p>
          </div>
        </div>

        <div className="card">
          <img src={Jerry} alt="Avatar" className="img-employee"/>
          <div className="container">
            <h4>Jerry Shewey</h4>
            <p>Realtor and Broker</p>
          </div>
        </div>

      </div>

      </div>
    );
  }
}

export default Agents;
