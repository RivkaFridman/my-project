import React,{useEffect,useState,useRef} from 'react'
import { useHistory } from "react-router-dom";
import {getUser} from './service'
import {connect} from 'react-redux';

import {setUser} from './redux/action'

function mapStateToProps(state){
    return{
          user:state.user
         
}
}

const mapDispatchToProps=(dispatch)=>({
    
    setUser: (user) => dispatch(setUser(user))
    

})

export default connect(mapStateToProps,mapDispatchToProps) ( function Display(props){
   
    
    const nameRef=useRef(null)
    const passwordRef=useRef(null)
    const history=useHistory()
  
   const [currentUser,setCurrentUser]=useState(null)
   const {user,setUser}=props
   let user2=null
useEffect(()=>{
    getUser()
    .then((user)=>{
        // currentUser.name=user.name
        // currentUser.password=user.password
        // currentUser.age=user.age
        // currentUser.city=user.city
        // currentUser.email=user.email
        // currentUser.phone=user.phone
      setUser(user)
        console.log(currentUser);

        console.log(user);})
 
 },[])
        
        return(
            <>
            <h2>{` hello user${user.name}`} </h2>
            <h5>{`${user.name}`} </h5>
           <h5>{ `password  ${user.password}`} </h5>
           <h5>{ `city  ${user.city}`} </h5>
           <h5>{ `phone  ${user.phone}`} </h5>
           <h5>{ `email  ${user.email}`} </h5>
          <h5> {` phone: ${user.phone}`   }</h5>

            </>
        )
        }
)


        // export default connect(mapStateToProps,mapDispatchToProps)(function CompanyDetails(props) {
//   const {user,company,dispatch,customer,setName}=props;

//   return (
  

// <div>
//     <div>
//        hello {user.firstName +" "+ user.lastName}<br></br>
//        our company {company.name} happy to see you!!!<br></br><br></br>
//        our customer {customer.name} from {customer.city} wiil calling you soon....
//     </div><br></br>
//         <input value={company.name} onChange={(e)=>{setName(e.target.value)}} ></input>
//   </div>
  
//   );
// })