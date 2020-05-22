import React from 'react'
import '../css/home.css'
import House from '../assets/house.jpg'
import Office from '../assets/sheweyoffice.jpg'
import Couple from '../assets/shewey.jpg'

var intro = "After retiring from the United States Air Force after 21 years of service,"
+ " Master Sergeant Dave Shewey became an escrow officer in February 1972 for Trans County Title."
+ " After working in this capacity for 2 years, Dave opened the Escrow Department of Bank of America in Merced, CA."
+ " Dave received his broker's license in February 1978 and opened Shewey Realty on July 1, 1979."

var middle = "The office has been at its present location since 1985.\n"
+ "Dave's son, Jerry, joined the firm as a Broker's Associate in 1996 after retiring from and selling his own"
+ " successful business, Yosemite Gun Shop and Shooting Range in order to spend more time with his family."
+ " This gun shop is still operating over on Yosemite Pkwy. and Jerry continues to pursue Gunsmithing and Hunting in his free time."

var end = "In January of 2012 Jerry took over leadership of the the business from his father, who passed away in 2014."
+ " In May of 2012 our office manager of 21 years retired, and Jerry's wife, Vicki, took over as office manager. "
+ "The stability of the firm is due to our hardworking and loyal employees in the office,"
+ " most of whom have spent most or all of their careers with us. It is this dedication, hard work and pride which"
+ " have given Rental Management and Shewey Realty the needed foundation to survive numerous economic downturns and"
+ "recessions which have allowed us to proudly serve the city and country of Merced for 38 years and counting."

const Home = () => (

  <div className="Home">

    <div className="jumbotron header">
      <img src={House} alt={"Generic House"} className="img-responsive house"/>

      <div className="col-sm-4 header-container">
        <h1 className="header-text">Shewey</h1>
        <h1 className="header-text-lower"> Realty Inc.</h1>
        <h1 className="header-text-lower"> DRE# 01193199</h1>
      </div>

      <div className="about-divide">
        <div className="about-circle">
          <span className="glyphicon glyphicon-chevron-down test"></span>
        </div>
      </div>
    </div>

    <div className="jumbotron about">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-lg-4"><img src={Couple} alt={"Jerry and Vicky"} className="dave"/></div>
        <div className="col-lg-8 right-about"><p className="intro">{intro}</p></div>
      </div>
      <div className="row">
        <div className="col-lg-6 middle-text"><p>{middle}</p></div>
        <div className="col-lg-6"><img src={Office} alt={"Shewey Office"} className="img-responsive office"/></div>
      </div>
      <div className="row">
        <div className="col-lg-12 end-text"><p>{end}</p></div>
      </div>
    </div>


  </div>
)

export default Home
