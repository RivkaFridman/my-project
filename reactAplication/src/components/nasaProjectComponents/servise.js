
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { auth, firebase } from "./firebase";
import {CURRENT_USER} from './login'
var img
var imghistory
// export function setCurrentUser(){

//    firebase.auth().onAuthStateChanged(function(user) {
//         if (user) 
//          currentUser=user
//      } );
     
//     }
    
// export async function sendUserdeatails(user) {
// debugger
 
//      await axios.post('http://localhost:4000/login', user,
//      { 
//         headers: { Authorization: "Bearer " + localStorage.getItem("@token") } ,
        
//     })     
//  .then((res)=>{
//   console.log(res.data)
//  debugger
//  }
//  )
//  .catch((err)=>{console.log(err)})

//  debugger
// }

export const sendUserdeatailsPromice= (user)=>{
    return   axios.post('http://localhost:4000/login', user,
    { 
       headers: { Authorization: "Bearer " + localStorage.getItem("@token") } ,
       
   }) 
//   return new Promise((resolve,reject)=>{
//       console.log(user)
//       debugger

 
//    .then((body)=>{debugger
//        resolve(body) })  
//    .catch((err)=>{debugger 
//     reject(err)})  
  
  
//   })
}

// const requestApi = (cityName) => {
//     return new Promise((resolve, reject) => {
//         let options = {
//             method: "GET",
//             url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=faa09387c28818deb070a7aaad0aa89f`
//         }
//         request(options,(err,res,body)=>{
//           if(err){
//             reject(err)
//           }
//           else resolve(body)
//         })
     
//     })
//   }





export async function getPictureOfTheDay(){
  
    console.log(CURRENT_USER)
await  axios.post('http://localhost:4000/getPictureFromNasa',
   CURRENT_USER,
    { 
        headers: { Authorization: "Bearer " + localStorage.getItem("@token") } ,
        
    })
    .then((res)=>{
        console.log(res.data)
        img=res.data
        console.log(img)
        return img
    })
    
   
return img

}


export async function getAllHistoryImages(){
    console.log(CURRENT_USER)

await axios.get('http://localhost:4000/getAllHistoryImagesFromUser',
    { 
        headers: { Authorization: "Bearer " + localStorage.getItem("@token") } ,
        
    })
    .then((res)=>{
         console.log(res.data)
         console.log(res.data.images)
        imghistory=res.data.images
         //imgArr.concat(...imgArr,res.data.images)
         console.log(imghistory)
         return imghistory
    })
    return imghistory


}











