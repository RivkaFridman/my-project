import React, { Component } from 'react';
import {BrowserRouter as Router,
        Switch,
        Link,
        Route,
        Redirect, withRouter, useParams
 } from 'react-router-dom'
 
import Flash from '../Router/flash'

import DisplayAll from './displayAll'
import Display from './display'
import { Login } from './form';
 export function MyRouter() {
return(
    <>
     <Router>

             

<nav>
<div className="btn-group" role="group" aria-label="Basic example">
<button className="btn btn-secondary" style={{color:'white'}}> <Link to="/">login</Link></button> 
<button className="btn btn-secondary"> <Link to="/display">display</Link></button>
<button className="btn btn-secondary"> <Link to="/displayAll">displayAll</Link></button>         
           </div>     
         </nav>
         <Flash>
         
         <div>
         <Switch>
       
          <Route path={"/display"}>
            <Display />
          </Route>
          <Route path={"/displayAll"}>
            <DisplayAll />
          </Route>
          <Route path={"/"}>
            <Login />
          </Route>
        

               

         </Switch>

         </div>
         </Flash>

         </Router>
</>

)
 }
