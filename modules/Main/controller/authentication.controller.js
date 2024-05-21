const {validationResult} = require("express-validator");
const jwt=require('jsonwebtoken')
const{login}=require('../service/authentication.service')

const loginUsingPost=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return  res.json({
            errors:errors
        });
    }
    const{Email,password}=req.body;
    const user=await login(Email,password)

    if (user){

        const accessToken=jwt.sign({user},'mySecret',{expiresIn: 60*60});
        return res.json({
            //user:user,
            accessToken:accessToken
        })
    }
    else {
        return  res.json({
            error:"Invalid"

        });
    }


}
module.exports={
    loginUsingPost
}
