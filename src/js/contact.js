import React from 'react'
import '../css/contact.css'

const Contact = () => (

  <div className="Contact-Us">
  <div className="jumbotron contact-header">
    <h1>Contact Us!</h1>
  </div>

<div className="jumbotron contact-body">
  <div className="row">
    <div className="col-lg-4">
      <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1109.3030020112435!2d-120.47531269450742!3d37.30145413384356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809143043feb109d%3A0x1b295661dc9268a5!2s8+W+20th+St%2C+Merced%2C+CA+95340!5e0!3m2!1sen!2sus!4v1514878753277"></iframe>
    </div>
    <div className="col-lg-8">
      <p>If you have any questions, comments, give us a call!</p>
      <div className="col-lg-6">
        <h3>Our Location</h3>
        <p>Shewey Realty</p>
        <p>8 W. 20th St.</p>

        <p>Merced, CA 95340</p>
      </div>
      <div className="col-lg-6">
        <h3>Call Us</h3>
        <p>Sales: <a href="tel:1-209-383-1666">1-209-383-1666</a></p>
        <p>Rentals: <a href="tel:1-209-383-1666">1-209-383-4288</a></p>
        <p>Fax: 209-383-1013</p>
      </div>
      <div className="col-lg-12">
      <h3>Email Us</h3>
        <p>Sales: <a href="mailto:Vicki@Sheweyrealty.com">Vicki@Sheweyrealty.com</a></p>
      </div>
    </div>

  </div>
</div>

  </div>
)

export default Contact
