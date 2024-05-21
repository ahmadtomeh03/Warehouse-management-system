const express =require('express')
const router=express.Router()
const{createEmployeeValidation,deleteEmployeeValidation,updateEmployeeValidation}=require('../validation/employee.validation')
const employee_middel=require('../middelware/employee.middleware')
const {employeeCreateByPost,employeeListByGet,employeeDeleteByDelete,employeeUpdateByPut}=require('../controller/employee.controller')
const AuthenticatedAdmin=require('../../Main/middelware/authentication.middelwareforadmin')




router.post('/employees',AuthenticatedAdmin,employee_middel,createEmployeeValidation,employeeCreateByPost)
router.get('/employees',AuthenticatedAdmin,employeeListByGet)
router.delete('/employees/:id',AuthenticatedAdmin,deleteEmployeeValidation,employeeDeleteByDelete)
router.put('/employees/:id',AuthenticatedAdmin,updateEmployeeValidation,employeeUpdateByPut)




module.exports=router;