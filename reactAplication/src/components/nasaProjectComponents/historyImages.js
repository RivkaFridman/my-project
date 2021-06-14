

import React, { useEffect, useState } from "react";
import { ReactVideo,YoutubePlayer } from "reactjs-media";
import axios from 'axios';
import {getPictureOfTheDay,currentUser,getAllHistoryImages} from './servise'
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import UploadMedia from '../nasaProjectComponents/uploadMedia'

import {connect} from 'react-redux';

import {actions} from '../../redax/actions'

 function mapStateToProps(state){
    
     return{
      currentUser:state.userReducer.currentUser,
      history:state.mediaReducer.historyImages
 }
}

const mapDispatchToProps=(dispatch)=>({
    
  setHistory: (history) => dispatch(actions.setHistory(history)),


})


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
let User
export default connect(mapStateToProps,mapDispatchToProps)(  function HistoryImages(props) {
  const {currentUser,dispatch,setHistory,history}=props;
    const classes = useStyles();
  //create state to store our book list
  const [historyImages, setHistoryImages] = useState([]);
 const [arr,setArr]=useState([])
var images
  useEffect(async()  => {
    
     
 const res= await  getAllHistoryImages()
 
     images=res
    console.log(images)
    setHistoryImages([...historyImages,...images])
    
   setHistory(images)
   // setImageOfTheDay(img)
   //  console.log(imageOfTheDay)
  
 //  setHistoryImages(historyImages.concat( images))
  

   console.log(historyImages)
   console.log(history)
//    function insertNum() {
//     setArr(arr.concat(Math.floor(Math.random() * 5)))
//     // setArr([...arr,(Math.floor(Math.random() * 5))])
// }

 
 }
 , []);


  

  return (
    <>
    <div className="container">
  
  <h3>hello {currentUser.displayName}</h3>
 
{
  history[0]?  <div className={classes.root}>
  <GridList cellHeight={180} className={classes.gridList}>
    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
      <ListSubheader component="div">your history media...</ListSubheader>
    </GridListTile>
    {history[0].map((img) => (
      <GridListTile key={img._id}>
          {img.media_type==='image' || img.media_type==='image/jpeg' ?
        <img src={img.url} alt={img.title} />
        : <YoutubePlayer    src={img.url}  primaryColor="red" />
    }

        <GridListTileBar
          title={img.title}
          subtitle={<span>by: NASA</span>}
          actionIcon={
            <IconButton aria-label={`info about ${img.title}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    ))}
  </GridList>
</div>:<h2>no history</h2>
}
    
    </div>
    

{/* {history.length?
history.map((media)=>(<h3 key={media}>{media.title}</h3>))
:<h3>didnt come from store...</h3>} */}
    <UploadMedia props={props}/>
    <br></br>
    <br></br>
    <button type="button" className="btn btn-info btn-lg btn-block">back to Home</button>
    </>
  )


})

           
        

// // fetch('http://localhost:4000/books', {
// //             mode: 'no-cors',
// //             method: "get",
// //             headers: {
                
// //                  'Authorization' : "Bearer " + localStorage.getItem("@token"),
// //                  'ContentType'  : "application/json"
// //             },
            
// //  })

//   {/* {books.map((book) => (
//         <div key={book.id} className="booklist">
//           <img className="image" alt={book} src={book.image} />
//           <h3>{book.name}</h3>
//         </div> */}
//       {/* ))} */}

//        {/* <img className="image"  src={imageOfTheDay.url}></img> */}
//     {/* <h5 className="fontColor" >{Date(imageOfTheDay.date)}</h5>
    
//     <h4 className="fontColor" >{imageOfTheDay.explanation}</h4>
//     <Button onClick={getAllHistoryImages} >show all your history images by NASA</Button>
//      </div>
    
// : <h1>initiol data...</h1>

// historyImages.map((img) => (
//     <div key={img._id} className="booklist col-3">
//       <h5>{img.title}</h5>
//   <div className="myVidueList">
//         <ReactVideo  
//             src={img.url}
//             //poster="https://www.example.com/poster.png"
//             primaryColor="red"
//             // other props

            
//         />
//     </div>
// </div> 
// ) )