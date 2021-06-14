import React  from 'react';
import {connect} from 'react-redux';
import {setCompanyName} from './actions'
import customer from './Reducers/Customer';
import {actions} from './actions'

 function mapStateToProps(state){
     return{
           user:state.userReducer.user,
           company:state.companyReducer.company,
           customer: state.customerReducer.customer
 }
}
const mapDispatchToProps=(dispatch)=>({
    
    setName: (name) => dispatch(actions.setCompanyName(name))
    

})

export default connect(mapStateToProps,mapDispatchToProps)(function CompanyDetails(props) {
  const {user,company,dispatch,customer,setName}=props;

    return (
    

<div>
      <div>
         hello {user.firstName +" "+ user.lastName}<br></br>
         our company {company.name} happy to see you!!!<br></br><br></br>
         our customer {customer.name} from {customer.city} wiil calling you soon....
      </div><br></br>
          <input value={company.name} onChange={(e)=>{setName(e.target.value)}} ></input>
    </div>
    
    );
})
