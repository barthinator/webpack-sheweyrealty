import React from 'react'
import '../css/sales.css'

const Sales = () => (

  <div className="Sales">

  <div className="jumbotron search-header">
    <h1>Homes for Sale</h1>
    <iframe className="listings" src="http://www.crmls.org/servlet/lDisplayListings?LA=EN"> </iframe>
  </div>

  </div>
)

export default Sales
