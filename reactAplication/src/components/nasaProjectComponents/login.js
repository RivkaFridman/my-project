import React from "react";
import { useHistory } from "react-router-dom";
  import { auth, firebase } from "./firebase";
import { sendUserdeatails,sendUserdeatailsPromice,setCurrentUser} from './servise'
import {connect} from 'react-redux';

import {actions} from '../../redax/actions'

 function mapStateToProps(state){
    
     return{
      currentUser:state.userReducer.currentUser
 }
}

const mapDispatchToProps=(dispatch)=>({
    
  setName: (displayName) => dispatch(actions.setDisplayName(displayName)),
  setEmail: (email) => dispatch(actions.setEmail(email)),
  

})
export var CURRENT_USER
export default connect(mapStateToProps,mapDispatchToProps)( function Login(props) {

  const {currentUser,dispatch,setName,setEmail,setMedia}=props;
  const history = useHistory();
  async function googleLogin() {
    //1 - init Google Auth Provider
    const provider = new firebase.auth.GoogleAuthProvider();
    //2 - create the popup signIn
    await auth.signInWithPopup(provider).then(
      async (result) => {
        //3 - pick the result and store the token
        const token = await auth?.currentUser?.getIdToken(true);
        //4 - check if have token in the current user
        if (token) {
          //5 - put the token at localStorage (We'll use this to make requests)
          localStorage.setItem("@token", token);
             await  firebase.auth().onAuthStateChanged(async function(user) {
            if (user) {
             
            console.log(user)
            CURRENT_USER=user
          const res=  await  sendUserdeatailsPromice(user)
            .then((res)=>{
              
              console.log(res.data)
              console.log(res.data.user)
              console.log(res.data.user.displayName)
              console.log(res.data.user.email)
              console.log(res.data.user.imagesHistory)
              setName(res.data.user.displayName)
              setEmail(res.data.user.email)
             
              
              history.push("/book-list")
            })
            .catch((err)=>{
             
              console.log(err)})
            
            
            }
         } );
        
          //6 - navigate user to the book list
          
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }
  return (
    <>
    <div>
    <div className="logo" ></div>
    </div>
     <div >
       
    <div  >
      <h1 className="display-4">wellcome to NASA new Aplication!!!</h1>
      <h3>here you can see the picture of the day---live from NASA</h3>
      <h5>enter your email and password</h5>
      <input type="email" placeholder="email"></input><br>
      </br>
      <br></br>
      <input type="password" placeholder="password"></input><br>
      </br>
      <h5>or</h5>
      <button onClick={googleLogin} className="btn btn-primary" style={{height: "50px", width:"250px"}}>
        sign in with GOOGLE
      </button>

  
    </div>
    <footer className="backgroundimg"></footer>
    </div>
    </>
  );


})