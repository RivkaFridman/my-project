import React, { useEffect, useState } from "react";
import { ReactVideo,YoutubePlayer } from "reactjs-media";
import axios from 'axios';
import {getPictureOfTheDay,currentUser,getAllHistoryImages} from './servise'
import { Button } from "@material-ui/core";
import { Redirect,withRouter } from "react-router-dom";

let User
export default withRouter( function BookList(props) {
  //create state to store our book list
  const [historyImages, setHistoryImages] = useState([]);
  const [imageOfTheDay,setImageOfTheDay] = useState(null)
  const {history}=props
  useEffect(async()  => {
    
      //fetch the book list
//       axios.get('http://localhost:4000/books', { headers: { Authorization: "Bearer " + localStorage.getItem("@token") } })     
//  .then((res)=>{
//   console.log(res.data)
  
//     setBooks(res.data)
const res=await  getPictureOfTheDay()
const img=res.image
console.log(img)
setImageOfTheDay(img)
 console.log(imageOfTheDay)


 }
 , []);

 
//עצרתי באמצע לנסות להציג את התמונה
 
      //set the book list on state
      

    
    //invoke the function
  //  loadBooks()
  function sendToHistory(){
    //<Redirect to={{pathname:"/history-images"}}></Redirect>
    history.push('/history-images')
  }

  return (
    <div className="container">
    {  imageOfTheDay ? 
    <div>
      <h1>{imageOfTheDay.title}</h1>
      <div className="myVidue">
        {imageOfTheDay.media_type==="image"?
        <img src={imageOfTheDay.url} className="image"></img>:
            <YoutubePlayer  
                src={imageOfTheDay.url}
                //poster="https://www.example.com/poster.png"
                primaryColor="red"
                // other props

                
            />
    }
        </div>
    
      {/* <img className="image"  src={imageOfTheDay.url}></img> */}
    <h5 className="fontColor" >{Date(imageOfTheDay.date)}</h5>
    
    <h4 className="fontColor lead" >{imageOfTheDay.explanation}</h4>
    <button className="btn btn-info" onClick={sendToHistory} >show all your history images by NASA</button>
     </div>
    
: <h1>initiol data...</h1>
    }
    </div>
  );
})

// fetch('http://localhost:4000/books', {
//             mode: 'no-cors',
//             method: "get",
//             headers: {
                
//                  'Authorization' : "Bearer " + localStorage.getItem("@token"),
//                  'ContentType'  : "application/json"
//             },
            
//  })

  {/* {books.map((book) => (
        <div key={book.id} className="booklist">
          <img className="image" alt={book} src={book.image} />
          <h3>{book.name}</h3>
        </div> */}
      {/* ))} */}