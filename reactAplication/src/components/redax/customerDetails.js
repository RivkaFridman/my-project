import React  from 'react';
import {connect} from 'react-redux';
import {setCustomerName,setCustomerCity} from './actions'
import {actions} from './actions'

 function mapStateToProps(state){
    
     return{
           user:state.userReducer.user,
           customer: state.customerReducer.customer
 }
}

const mapDispatchToProps=(dispatch)=>({
    
    setName: (name) => dispatch(actions.setCustomerName(name)),
    setCity: (city) => dispatch(actions.setCustomerCity(city))

})

export default connect(mapStateToProps,mapDispatchToProps)(function CustomerDetails(props) {
  const {user,dispatch,setName,setCity,customer}=props;

  
    return (
    

<div>
      <div>
          <label>Customer name</label>
          <input value={customer.name} onChange={(e)=>{setName(e.target.value)}} ></input>
      </div>
      <div>
          <label>Customer City</label>
          <input value={customer.city} onChange={(e)=>{setCity(e.target.value)}}></input>
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