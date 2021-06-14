
import React  from 'react';

import produce from 'immer';
import { createStore ,combineReducers} from 'redux';
import userReducer from './Reducers/User'
import mediaReducer from './Reducers/Media'
import customerReducer from './Reducers/Customer'
  



const reducer=combineReducers({userReducer,mediaReducer})

const store = createStore(reducer);
window.store = store;
export default store;

 
