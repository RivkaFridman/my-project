import React  from 'react';
import {connect} from 'react-redux';
import {setFirstName,setLastName} from './actions'
import {actions} from './actions'

 function mapStateToProps(state){
    
     return{
           user:state.userReducer.user
 }
}

const mapDispatchToProps=(dispatch)=>({
    
    setFirst: (firstName) => dispatch(actions.setFirstName(firstName)),
    setLast: (lastName) => dispatch(actions.setLastName(lastName))

})

export default connect(mapStateToProps,mapDispatchToProps)(function UserDetails(props) {
  const {user,dispatch,setFirst,setLast}=props;

  
    return (
    

<div>
      <div>
          <label>First name</label>
          <input value={user.firstName} onChange={(e)=>{setFirst(e.target.value)}} ></input>
      </div>
      <div>
          <label>Last Name</label>
          <input value={user.lastName} onChange={(e)=>{setLast(e.target.value)}}></input>
      </div>

    </div>
    
    );
})
// onChange={(e)=>{setName(e.target.value)}}
// export default connect(mapStateToProps, mapDispatchToProps)(function UserDetails(props) {
//     const { user,setFirstName,setLastName,setAge,setMobile} = props;
    
    
//     return (
//             <div>
//             <label>first name</label><input
//                 value={user.firstName}
//                 onChange={(e)=>setFirstName(e.target.value)}
//             ></input><br></br>

//             <label>last name</label><input
//                 value={user.lastName}
//                 onChange={(e)=>setLastName(e.target.value)}
//             ></input><br></br>
            
//             <label>age</label><input
//                 value={user.age}
//                 onChange={(e)=>setAge(e.target.value)}
//             ></input><br></br>
            
//             <label>mobile</label><input
//                 value={user.mobile}
//                 onChange={(e)=>setMobile(e.target.value)}
//             ></input><br></br>
//             </div>
//     );
// })