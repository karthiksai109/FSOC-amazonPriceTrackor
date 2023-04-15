const mongoose=require('mongoose')
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },range:{
        type:String,
        
    }
})
module.exports=mongoose.model('register',registerSchema)