const {body,param}=require('express-validator')
const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const Email=body('Email').notEmpty().withMessage('Email is required')
.custom(async (val)=>{
    const email = val.toLowerCase();
    const customer=await db('customers').where('Email',email).first()
    if (customer){
        return  Promise.reject('This customer Email already exists.')
    }else {
        return Promise.resolve()
    }
});
const Name =body('Name').notEmpty().withMessage('Name is required')
    .custom(async (value)=>{
        const  n=await db('customers').where('Name',value).first()
        if (n){
            return  Promise.reject('This customer Name already exists.')
        }else {
            return Promise.resolve()
        }
});
const password=body('password','password is required').notEmpty()
    .custom((value)=>{
    if(value && value.length<6){
        return Promise.reject('The password should be greater then 6 character');
    }else {
        return Promise.resolve();
    }

});
const phone=body('phone','phone is required').notEmpty()

const reserved_space=body('reserved_space').notEmpty().isNumeric()
.withMessage('you must write a space you need to calculate the payment_amount')

const Customers_id=param('Customers_id').isInt().withMessage('Customers_id should be valid')
    .custom(async (val)=>{
        try {
            const c_id=await db('customers').where('Customers_id',val).first()
            if (c_id){
                return Promise.resolve();
            }else{
                return Promise.reject('the Customer Id is invalid');
            }
        }catch (e) {
                return Promise.reject('the Customer Id is invalid');
        }
     })

const creatCustomerValidation=[
    Email,
    Name,
    password,
    phone,
    reserved_space
]
const deleteCustomerValidation=[
    Customers_id
]
const updateCustomerValidation=[
    Customers_id,
    password,
    phone,
    reserved_space
]
const dataCustomerValidation=[
    Customers_id
]
module.exports={
    creatCustomerValidation,
    deleteCustomerValidation,
    updateCustomerValidation,
    dataCustomerValidation
}