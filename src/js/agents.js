import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/agents.css'
import Avatar from '../assets/avatar.png'
import Candace from '../assets/candace.jpg'
import Phillip from '../assets/phillip.jpg'
import Jerry from '../assets/jerry.jpg'
import Celina from '../assets/celina.jpg'

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
          <img src={Phillip} alt="Phillip Snowberger" className="img-employee"/>
          <div className="container">
            <h4>Phillip Snowberger</h4>
            <p>(209)-617-2515</p>
            <p>Realtor</p>
          </div>
        </div>

        <div className="card">
          <img src={Candace} alt="Candace Bartholomew" className="img-employee"/>
          <div className="container">
            <h4>Candace Bartholomew</h4>
            <p>(209)-777-8441</p>
            <p>Realtor</p>
          </div>
        </div>

        <div className="card">
          <img src={Celina} alt="Celina Garcia" className="img-employee"/>
          <div className="container">
            <h4>Celina Garcia</h4>
            <p>(209)-631-2818</p>
            <p>Realtor</p>
          </div>
        </div>

        <div className="card">
          <img src={Jerry} alt="Jerry Shewey" className="img-employee"/>
          <div className="container">
            <h4>Jerry Shewey</h4>
            <p>(209)-383-1666</p>
            <p>Realtor and Broker</p>
          </div>
        </div>

      </div>

      </div>
    );
  }
}

export default Agents;
