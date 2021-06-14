const express=require('express')
const app=express()
const router=require('./routes/api.js')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
dotenv.config()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


app.use('/',bodyParser.json())
app.use('/',router)
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected')
    })
    .catch((err) => {
        console.log('error!!'+err)
    })

app.listen(4000,()=>{
    console.log('listen...');
})



// //jwt
// const jwt=require('jsonwebtoken')
// app.get('/signIn/:name/:password',(req,res)=>{
//    const token=jwt.sign({name:req.params.name,password:req.params.password},'123abc')
//    res.send(token)
// })
// app.get('/login/:token',(req,res)=>{
//     const user=jwt.verify(req.params.token,'123abc')
//     res.send(user)
//  })

 

 


