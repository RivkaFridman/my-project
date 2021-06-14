import produce from 'immer';
import { actions } from '../actions';
import {createRducer} from './ReducerUtils'

const initialState={
    currentUser:{
        displayName:"sara",
        email:'gukgkjkj',
        historyImages:[]
    }
   
}

const user={
 
    setDisplayName(state,action) {
      state.currentUser.displayName=action.payload
  },
    setEmail(state,action) {
    state.currentUser.email=action.payload
},
   setHistory(state,action) {
    state.currentUser.historyImages.concat([...state.currentUser.historyImages,action.payload])
}



    // setFirstName(firstName)),
    // setLast: (lastName) => dispatch(actions.setLastName(lastName)
}


export default produce((state,action)=>{createRducer(state,action,user) },initialState)