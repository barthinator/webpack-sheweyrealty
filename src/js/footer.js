import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/footer.css'

class Footer extends Component {

  render() {

    return (
      <div className="Footer">

      <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6 footerleft ">
        <div className="logofooter"> Shewey Realty Inc.</div>
        <p><i className="fa fa-map-pin"></i> 8 W. 20th - 95340, Merced, California</p>
        <p><i className="fa fa-phone"></i> Phone Sales (USA) : +1 209-383-1666</p>
        <p><i className="fa fa-phone"></i> Phone Rental (USA) : +1 209-383-4288</p>
        <p><i className="fa fa-envelope"></i> E-mail : vicki@sheweyrealty.com</p>

      </div>
      <div className="col-md-2 col-sm-6 paddingtop-bottom">
        <h6 className="heading7">Links</h6>
        <ul className="footer-ul">
        <li><Link to='/' className="link">Home</Link></li>
        <li><Link to='/agents' className="link">Agents</Link></li>
        <li><a href="https://rentalmgmtinc.appfolio.com/connect">Pay Rent</a></li>
        <li><Link to='/search' className="link">Listings</Link></li>
        <li><Link to='/contact' className="link">Contact</Link></li>
        </ul>
      </div>
      <div className="col-md-3 col-sm-6 paddingtop-bottom">
        <h6 className="heading7">News</h6>
        <div className="post">
          <p>Finally finished redoing our website. Had a wonderful designer/web developer fully revamp it!<span>December 25, 2018</span></p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 paddingtop-bottom">
        <div className="fb-page" data-href="https://www.facebook.com/sheweyrealty/" data-tabs="timeline" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <div className="fb-xfbml-parse-ignore">
            <blockquote cite="https://www.facebook.com/sheweyrealty/"><a href="https://www.facebook.com/sheweyrealty/">Facebook</a></blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>


<div className="copyright">
  <div className="container">
    <div className="col-md-6">
      <p>© 2018 - All Rights with Shewey Realty Inc.</p>
    </div>
    <div className="col-md-6">
      <ul className="bottom_ul">
        <li><Link to='/' className="link">sheweyrealty.com</Link></li>
        <li><Link to='/' className="link">Home</Link></li>
        <li><Link to='/agents' className="link">Agents</Link></li>
        <li><a href="https://rentalmgmtinc.appfolio.com/connect">Pay Rent</a></li>
        <li><Link to='/search' className="link">Listings</Link></li>
        <li><Link to='/contact' className="link">Contact</Link></li>
      </ul>
    </div>
  </div>
</div>

      </div>
    );
  }
}

export default Footer;
