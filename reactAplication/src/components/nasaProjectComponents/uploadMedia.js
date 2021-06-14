import { React,useState } from "react"
import axios from 'axios';
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




export default connect(mapStateToProps,mapDispatchToProps)( function UploadMedia(props){
     const [selectedFile,setSelectedFile]=useState(null)
     const [loaded,setLoaded]=useState(0)

     const {currentUser,dispatch,setHistory,history}=props;

    function onChangeHandler(event){
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
        console.log(selectedFile)
    }
    function onClickHandler(){
        const data = new FormData() 
    data.append('file', selectedFile)
    axios.post("http://localhost:4000/upload", data, { 
        // receive two    parameter endpoint url ,form data
        headers: { Authorization: "Bearer " + localStorage.getItem("@token") } 
    })
  .then(res => { // then print response status
      console.log(res)
      setHistory(res.data.images)
   })
  

    }

    return(
       
        <div className="container">
	<div className="row">
	  
	   <div className="col-6">
	      <form method="post" action="#" id="#">
           
              
              
              
              <div className="form-group files color">
                <label>Upload Your File </label>
                <input type="file" name="file" onChange={(e)=>onChangeHandler(e)} className="form-control" multiple=""/>
              </div>
              <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
            
          </form>
   
	      
	  </div>
	</div>
</div>

    )
})