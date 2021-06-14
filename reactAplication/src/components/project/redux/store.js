import React  from 'react';

import produce from 'immer';
import { createStore } from 'redux';


const initialState={
    user:{
        name:"miniMarket",
        password:"",
        age:0,
        city:"",
        email:"",
        phone:""
    },
    allUsers:[]
    
   
}
  



let reducer=produce((state,action)=>{
switch (action.type){
case 'SET_USER':
    state.user=action.payload
  break
  case 'SET_ALL_USERS':
    state.allUsers=[action.payload]
    console.log(action.payload);
    console.log(state.allUsers);
  break
  default:
       break;
}
},initialState)

const store = createStore(reducer);
window.store = store;
export default store;