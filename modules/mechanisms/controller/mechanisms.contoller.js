const{validationResult, body}=require('express-validator')
const{mechanismsList,mechanismsCreate,mechanismsDelete,mechanismsUpdate}=require('../service/mechanisms.service')

const mechanismsListByGet=async (req,res)=>{
    const result=await mechanismsList();
    return res.json({
        result:result
    })
}
const mechanismsCreateByPost=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            error:errors
        })
    }
    const {Mechanisms_Name,Price}=req.body;
    const result=await mechanismsCreate(Mechanisms_Name,Price);
    return res.json({
        result:result
    })
}

const mechanismsDeleteByDelete=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors:errors
        })
    }
    const{Mechanisms_id}=req.params;
    const result=await mechanismsDelete(Mechanisms_id);
    res.json({
        result:result
    })
}

const mechanismsUpdateByPut=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const {Mechanisms_id}=req.params;
    const{Mechanisms_Name,Price}=req.body;
    const result=await mechanismsUpdate(Mechanisms_id,Mechanisms_Name,Price);
    return res.json({
        result:result
    })

}



module.exports={
    mechanismsListByGet,
    mechanismsCreateByPost,
    mechanismsDeleteByDelete,
    mechanismsUpdateByPut
}