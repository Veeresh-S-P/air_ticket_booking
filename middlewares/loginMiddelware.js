const UserModel=require("../models/UserModel")
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const secretkey=process.env.secretkey

module.exports=async function loginMiddelware(req,res,next){
    const {email,password}=req.body

    try{
        if(!email||!password) return res.send({msg:"provide all the details correctly."})
        let user=await UserModel.findOne({email})
    if(!user) return res.send({msg:"user not found"})
    bcrypt.compare(password, user.password, (err, result)=>{
if(!result) return res.send({msg:'Wrong password'});
user.password=null
let token=jwt.sign({UserData:user},secretkey,{expiresIn:'5h'})
req.body.token=token;
next()

})
    }catch(err){
        res.send({err:err.message})
    }
}
 