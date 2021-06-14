import axios from 'axios';
export async function getAllStudents(){
    console.log('fhj');
  await  axios.get('localhost:4000/getAllStudents')
    .then(data=>{
      console.log(data)
    },

      err=>{console.log(err);}
    )
   
}