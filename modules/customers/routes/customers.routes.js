const express =require('express')
const router=express.Router()
const {customerCreateByPost,customerListByGet,customerDeleteByDelete,customerUpdateByPut,customerIdListByGet}=require('../controller/customers.controller')
const logger=require('../middelware/customers.middleware')
const {creatCustomerValidation,deleteCustomerValidation,updateCustomerValidation,dataCustomerValidation}=require('../validation/customers.validation')
const Authenticated=require('../../Main/middelware/authentication.middelware')
const AuthenticatedAdmin=require('../../Main/middelware/authentication.middelwareforadmin')

router.post('/signup',creatCustomerValidation,customerCreateByPost)
router.get('/customers',AuthenticatedAdmin,customerListByGet)
router.delete('/customers/:Customers_id',AuthenticatedAdmin,deleteCustomerValidation,customerDeleteByDelete)
router.put('/customers/:Customers_id',AuthenticatedAdmin,updateCustomerValidation,customerUpdateByPut)
router.get('/customers/:Customers_id',Authenticated,dataCustomerValidation,customerIdListByGet)

module.exports=router;
