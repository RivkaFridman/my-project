import React,{useEffect,useState,useRef} from 'react'
import { useHistory } from "react-router-dom";

export function Login(){
   
    
    const nameRef=useRef(null)
    const passwordRef=useRef(null)
    const history=useHistory()
    function sendDetails(){
      history.push(`/todo/${nameRef.current.value}`)
    }
        
        return(
            <>
            <div>name: <input type="text" ref={nameRef}></input></div><br></br>
            <div>password: <input type="password" ref={passwordRef}></input></div><br></br>
            <button onClick={sendDetails}>login</button>
            </>
        )
        }