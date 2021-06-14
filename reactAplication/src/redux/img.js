import produce from 'immer';
import { actions } from '../actions';
import {createRducer} from './ReducerUtils'

const initialState={
    images:[]
    
   
}


// date: "2021-04-26T00:00:00.000Z"
// explanation: "These three bright nebulae are often featured on telescopic tours of the constellation Sagittarius and the crowded starfields of the central Milky Way. In fact, 18th century cosmic tourist Charles Messier cataloged two of them; M8, the large nebula below and right of center, and colorful M20 near the top of the frame. The third emission region includes NGC 6559, left of M8 and separated from the larger nebula by a dark dust lane. All three are stellar nurseries about five thousand light-years or so distant. Over a hundred light-years across the expansive M8 is also known as the Lagoon Nebula. M20's popular moniker is the Trifid. Glowing hydrogen gas creates the dominant red color of the emission nebulae. But for striking contrast, blue hues in the Trifid are due to dust reflected starlight. The broad interstellarscape spans almost 4 degrees or 8 full moons on the sky."
// hdurl: "https://apod.nasa.gov/apod/image/2104/M8-M20_GabrielSantos_APOD.jpg"
// media_type: "image"
// title: "A Sagittarius Triplet"
// url: "https://apod.nasa.gov/apod/image/2104/M8-M20_GabrielSantos_APOD1024.jpg"
// userID: ["6080608b864d702b3463545c"]
// __v: 0
// _id: "608640e066bde6157c696529"

const imgFunctions={
 
 
   setImages(state,action) {
       console.log(action.payload)
      // state.historyImages=[]
      state.images=[action.payload]
      //state.historyImages.concat([action.payload])
   
    console.log(state.images)
}



    // setFirstName(firstName)),
    // setLast: (lastName) => dispatch(actions.setLastName(lastName)
}


export default produce((state,action)=>{createRducer(state,action,imgFunctions) },initialState)