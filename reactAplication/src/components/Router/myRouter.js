import React, { Component } from 'react';
import {BrowserRouter as Router,
        Switch,
        Link,
        Route,
        Redirect, withRouter, useParams
 } from 'react-router-dom'
 import MyAccount from './routeToAccount'
import Flash from './flash'


import {ToDoList} from '../todoList'
import { Login } from '../login';
 export function MyRouter() {
return(
     <Router>
         <Flash>
         
         <div>
         <Switch>
       
          <Route path={"/todo"}>
            <ToDoList />
          </Route>
          <Route path={"/"}>
            <Login />
          </Route>
         {/* <Route path={"/history-images"}>
            <HistoryImages />
          </Route>
         <Route path={"/book-list"}>
            <BookList />
          </Route>
         <Route path={"/"}>
            <Login />
          </Route> */}
          

               

         </Switch>

         </div>
         </Flash>
     </Router>
)
 }
