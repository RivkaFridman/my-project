
import React, { Component } from 'react';
import {BrowserRouter as Router,
        Switch,
        Link,
        Route,
        Redirect, withRouter
 } from 'react-router-dom'
// import {Button} from '@material-ui/core'


export default withRouter ( function MyAccount(props) {
    const{name,history}=props
   
    if(!name)
    return <Redirect to={{pathname : "/", state:{flash:"please enter name, you cant log in without name"}} }></Redirect>

    function  next() {
        history.push('/')
    }
    
        return(
            <div>
            <h1>myAccount</h1>
            <h2>hellow {name}</h2>
            
       {/* // <Button onClick={next}>next to home</Button> */}
      
            </div>
        )
    })