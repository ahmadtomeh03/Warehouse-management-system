const {body}=require('express-validator');
const knex=require('knex')

const Email=body('Email','email is required').notEmpty()
const password=body('password','password is required').notEmpty().custom((value)=>{
    if(value && value.length<6){
        return Promise.reject('The password should be greater then 6 character');
    }

    return Promise.resolve();
})

const loginValidation=[
    Email,password
]

module.exports={
    loginValidation
}