const{validationResult, body}=require('express-validator')
const{employeeCreate,employeeList,employeeDelete,employeeUpdate}=require('../service/employee.srevice')



const employeeCreateByPost=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
        errors : errors
        })
    }
    const {name,phone,date_join,salary,employee_role}=req.body;
    const result=await employeeCreate(name,phone,date_join,salary,employee_role)
    return  res.json({
        result:result
    })
}

const employeeListByGet=async (req,res)=>{
    const result=await employeeList();
    return res.json({
        result:result
    })
}
const employeeDeleteByDelete=async (req,res)=>{
    const errors= validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        });
    }
    const {id}=req.params;
    const result=await employeeDelete(id);
    return res.json({
        result:result
    })
}
const employeeUpdateByPut=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const {id}=req.params;
    const {name,phone,date_join,salary,employee_role}=req.body;
    const result=await employeeUpdate(id,name,phone,date_join,salary,employee_role);
    return res.json({
        result:result
    })
}
module.exports={
    employeeCreateByPost,
    employeeListByGet,
    employeeDeleteByDelete,
    employeeUpdateByPut
}









