import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Agents from './agents'
import Contact from './contact'
import Search from './search'
import Manage from './manage'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/agents' component={Agents}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/search' component={Search}/>
      <Route path='/manage' component={Manage}/>
    </Switch>
  </main>
)

export default Main
