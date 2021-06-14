const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        
    
    },
    city:{
        type:String
        },
    phone:{
         type:String
         }
    

    

})

module.exports=mongoose.model('User',userSchema)