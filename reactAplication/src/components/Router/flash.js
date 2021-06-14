import React, { Component } from 'react';
import {BrowserRouter as Router,
        Switch,
        Link,
        Route,
        Redirect, withRouter
 } from 'react-router-dom'

 

export default withRouter ( function Flash(props) {
    const{state}=props.location
    if(state && state.flash)
return <p>{state.flash}</p>
    return (props.children)


     
    })