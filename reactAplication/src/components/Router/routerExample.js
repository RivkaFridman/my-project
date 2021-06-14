import React, { Component } from 'react';
import {BrowserRouter as Router,
        Switch,
        Link,
        Route,
        Redirect, withRouter, useParams
 } from 'react-router-dom'
 import MyAccount from './routeToAccount'
import Flash from './flash'
// import Login from '../nasaProjectComponents/login.js'
//  import BookList from '../nasaProjectComponents/books.js'
//  import HistoryImages from '../nasaProjectComponents/historyImages'
import {ToDoList} from '../todoList'
 export function RouteExa() {
return(
     <Router>
         <Flash>
         
         <div>
         <Switch>
         <Route path={"/"}>
            <ToDoList />
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


//  export function  Menu(params) {
//      return(
//          <>
//          <nav>
//              <ul>
//                  <li>
//                      <Link to="/">Home</Link>
//                  </li>
//                  <li>
//                      <Link to="/products/1">Products</Link>
//                  </li>
//                  <li>
//                      <Link to="/myAccount">MyAccount</Link>
//                  </li>
//              </ul>
//          </nav>

//          </>
//      )
//  }


 export function Home() {
     
    return   <h1>Home</h1>
     
 }

 export function Products() {
const  {id}=useParams();

    const productsList={
        1:"plisse skirt",
        2:"A skirt",
        3:"normal skirt"
    }
    return(
        <div>
        <h1>products...</h1>
        <h2>{productsList[id]}</h2>
        </div>
    )
}
