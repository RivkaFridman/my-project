import React,{useEffect,useState,useRef} from 'react'
import { useHistory } from "react-router-dom";
import {sendUserdeatails} from './service'
export function Login(){
   
    
    const nameRef=useRef(null)
    const passwordRef=useRef(null)
    const ageRef=useRef(null)
    const cityRef=useRef(null)
    const emailRef=useRef(null)
    const phoneRef=useRef(null)
    const history=useHistory()



  async  function sendDetails(){
    //   history.push(`/todo/${nameRef.current.value}`)
    const user={
        name:nameRef.current.value,
        password:passwordRef.current.value,
        age:ageRef.current.value,
        city:cityRef.current.value,
        email:emailRef.current.value,
        phone:phoneRef.current.value,
    }
    console.log(await sendUserdeatails(user))
    }
        
        return(
            <>
            <html>
                <body style={{textAlign:'center'}}>
            <div className="form" style={{margin:'auto', marginTop:'50px',backgroundColor:'aquamarine'}}>
            <div><input type="text" ref={nameRef} placeholder="name"></input></div><br></br>
            <div><input type="password" ref={passwordRef} placeholder="password"></input></div><br></br>
            <div><input type="text" ref={ageRef} placeholder="age"></input></div><br></br>
            <div><input type="text" ref={cityRef} placeholder="city"></input></div><br></br>
            <div><input type="text" ref={emailRef} placeholder="email"></input></div><br></br>
            <div><input type="text" ref={phoneRef} placeholder="phone"></input></div><br></br>
            
            <button className="btn btn-primary" onClick={sendDetails}>submit</button>
            </div>
            </body>
            </html>
            </>
        )
        }