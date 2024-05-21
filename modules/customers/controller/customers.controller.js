const{validationResult}=require('express-validator')
const{customerCreate,customerList,customerDelete,customerUpdate,customerIDList}=require('../service/customers.service')
const {json} = require("express");



const customerListByGet=async (req,res)=>{
   const result=await customerList();
   return res.json({
       result:result
   })

}
const customerIdListByGet=async (req,res)=>{
    const error=validationResult(req);
    if (!error.isEmpty()){
        return res.json({
            errors:error
        });
    }
    const {Customers_id}=req.params;
    const result=await customerIDList(Customers_id);
    return res.json({
        result:result
    })
}
const customerCreateByPost=async (req,res)=>{
    const error=validationResult(req);
    if (!error.isEmpty()){
        return res.json({
            errors:error
        });
    }
    const{Email,Name,password,phone,reserved_space}=req.body;
    const result=await customerCreate(Email,Name,password,phone,reserved_space);
    return  res.json({
        result:result
    })
}
const customerDeleteByDelete=async (req,res)=>{
    const error=validationResult(req);
    if (!error.isEmpty()){
        return res.json({
            errors:error
        });
    }
    const {Customers_id}=req.params;
    const result=await customerDelete(Customers_id);
    return res.json({
        result:result
    })
}
const customerUpdateByPut=async (req,res)=>{
    const error=validationResult(req);
    if (!error.isEmpty()){
        return res.json({
            errors:error
        });
    }
    const {Customers_id}=req.params;
    const{Email,Name,password,phone,reserved_space}=req.body;
    const result=await customerUpdate(Customers_id,Email,Name,password,phone,reserved_space);
    return res.json({
        result:result
    })

}

module.exports={
    customerCreateByPost,
    customerListByGet,
    customerDeleteByDelete,
    customerUpdateByPut,
    customerIdListByGet
}