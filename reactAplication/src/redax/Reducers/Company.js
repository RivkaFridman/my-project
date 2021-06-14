import produce from 'immer';
import { actions } from '../actions';
import {createRducer} from './ReducerUtils'

const initialState={
    
    company:{
      name:"Osher Ad"
    }

}

const company={

    setCompanyName(state,action){
        state.company.name=action.payload
    }
    
}

export default produce((state,action)=>{createRducer(state,action,company) },initialState)