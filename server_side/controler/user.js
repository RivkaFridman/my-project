const User=require('../model/user')


const saveUser=(req,res)=>{
    console.log(req.body);
 const newUser=new User(req.body)
 newUser.save()
 .then((user)=>{
  if(user){
res.status(200).send({myUser:user})
  }
 })
 .catch((err)=>{
     res.send(err)
})

}


const getUser=(req,res)=>{
    // User.find({$and:[{name:{$eq:req.body.name}},{password:{$eq:req.body.password}}]})
    // .then((user)=>{res.send({user:user})})
    // .catch((err)=>{res.send(err)})

User.find({}).sort({ _id: -1}).limit(1)
.then((user)=>{
res.send({user:user[0]})
})
.catch((err)=>{res.send(err)})

}
const getAllUsers=(req,res)=>{
User.find()
.then((users)=>{res.send({users:users})})
.catch((err)=>{res.send(err)})
}
module.exports={saveUser,getUser,getAllUsers}