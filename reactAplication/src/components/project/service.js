import axios from 'axios';


export const sendUserdeatails= (user)=>{
    console.log(user);
    return   axios.post('http://localhost:4000/saveUser', user) 
    .then((res)=>{console.log(res);})
    .catch((err)=>{console.log(err);})
}


export async function getUser(){
  
    let user,user2  
user2= await  axios.get('http://localhost:4000/getUser')
    .then((res)=>{
        console.log(res.data)
         user=res.data.user
     return user
       
    })
    console.log(user2);
  
 return user2

}
export async function getAllUsers(){
  
    let users,user2  
user2= await  axios.get('http://localhost:4000/getAllUsers')
    .then((res)=>{
        console.log(res.data)
         users=res.data.users
     return users
       
    })
    console.log(user2);
  
 return user2

}