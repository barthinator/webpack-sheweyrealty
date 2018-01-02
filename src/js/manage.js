import React from 'react'
import '../css/manage.css'

var screening = "We advertise vacancies and attract renters so you don't have to! We also screen all candidates to ensure that they have sufficient income to afford their rent, verify their references and rental history and check potential renters' credit history.";
var handyman = "We employ a full-time maintenance staff and on-call services for maintenance emergencies. By performing general maintenance services in-house we can offer handyman services at a reduced rate and pass the savings on to you. We also have relationships with contractors for specialized services such as carpeting and carpet cleaning, plumbing service and others which give us special discounted rates from verified and trusted contractors. We can ensure that you never have to worry about the leaks, creaks, cracks and general headaches of ongoing maintenance.";
var collection = "We handle rent collection, bill payment and account disbursement each month. Once the bills are paid, such as water, sewer and any maintenance expenses, we simply put the remaining rent into the account you designate or send you a check! Did you know that if a tenant fails to pay for trash and sewer, a lien can be placed on your property and it could go up for auction - all without you ever knowing? This is one of the many pitfalls of property management we can help you avoid! Because of this, we strongly suggest that the landlord pays sewer and garbage. We will also handle late rental payments so you don't have to be the bad guy!";
var leavers = "Our service ensures that in the unfortunate event that tenancy needs to be terminated, it is done properly. Do you know the difference between a three-day, thirty-day and sixty-day notice and when it is appropriate to use each kind of notice? Do you know how to file an unlawful detainer lawsuit? Do you know how to obtain a Writ of Possession? Do you know what to do if a tenant leaves behind property? We do! Let us worry about this! Improperly performing any one of these actions can leave you in hot water and cost you money. Let us handle the details and give you some peace of mind!";

const Contact = () => (

  <div className="Contact-Us">

    <div className="jumbotron manage-header">
      <h1>Property Management Services</h1>
    </div>

    <div className="jumbotron manage-body">
      <div className="row">

      <ul>
        <li className="m-list">
          <h2>Screening of Tenants</h2>
          <p>{screening}</p>
        </li>

        <li className="m-list">
        <h2>Handyman Services by our Full-Time Maintenance Staff</h2>
        <p>{handyman}</p>
        </li>

        <li className="m-list">
        <h2>Rent Collection and Bill Pay</h2>
        <p>{collection}</p>
        </li>


        <li className="m-list">
        <h2>Moving, Evictions and Vacancies</h2>
        <p>{leavers}</p>
        </li>
      </ul>

      </div>
    </div>

  </div>
)

export default Contact
