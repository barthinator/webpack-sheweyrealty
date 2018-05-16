import React from 'react'
import '../css/search.css'

const Search = () => (

  <div className="Search">

  <div className="jumbotron search-header">
    <a className="rent-link" href="https://rentalmgmtinc.appfolio.com/connect"> Pay Rent </a>
    <h1>Find Rental Properties</h1>
    <iframe className="listings" src="http://rentalmgmtinc.appfolio.com/listings?1514432888282&amp;theme_color=%23676767"> </iframe>
    <h1>Search</h1>
    <iframe className="listings" src="http://www.crmls.org/servlet/lDisplayListings?LA=EN"> </iframe>
  </div>

  </div>
)

export default Search
