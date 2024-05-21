const express=require('express')
const router=express.Router();
const {loginValidation}=require('../validation/authentication.validation')
const {loginUsingPost}=require('../controller/authentication.controller')

router.post('/login',loginValidation,loginUsingPost)



module.exports=router;