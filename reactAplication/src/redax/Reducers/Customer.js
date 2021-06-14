import produce from 'immer';
import { actions } from '../actions';
import {createRducer} from './ReducerUtils'

const initialState={
    customer:{
        name:"miniMarket",
        city:"jerusalem"
    }
   
}


export const customer={
 
    setCustomerName(state,action){
        state.customer.name=action.payload
    },
    
    setCustomerCity(state,action){
        state.customer.city=action.payload
    }
    

}


export default produce((state,action)=>createRducer(state,action,customer),initialState)