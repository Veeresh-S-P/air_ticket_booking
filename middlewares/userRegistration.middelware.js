const bcrypt=require('bcrypt')
const UserModel=require('../models/UserModel')
require('dotenv').config()

const saltrounds=11

module.exports=async function registrationMiddelware(req,res,next){
    const {name,email,password}=req.body

    if(!name||!email||!password) return res.send({msg:"please provode all the information"})

    let user=await UserModel.findOne({email});
    console.log(user)
    if(!user)
    bcrypt.hash(password, saltrounds,(err,hash)=>{
req.body.password=hash
next()
})
else return res.send({msg:"user already existed"})
}

