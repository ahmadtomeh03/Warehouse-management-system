const{validationResult, body}=require('express-validator')
const {listWareHouse,createWareHouse,deleteWareHouse,updateWareHose}=require('../service/warehouse_m.service')




const listWareHouseByGet=async(req,res)=>{
    const result= await listWareHouse();
    return res.json({
        result:result
    })

}
const createWareHouseByPost=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const {warehouse_name,Available_space}=req.body;
    const result=await createWareHouse(warehouse_name,Available_space);
    return res.json({
        result:result
    })
}
const deleteWareHouseByDelete=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const {warehouse_id}=req.params;
    const result=await deleteWareHouse(warehouse_id)
    return res.json({
        result:result
    })

}
const updateWareHouseByPut=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const {warehouse_id}=req.params;
    const {warehouse_name,Available_space}=req.body;
    const result=await updateWareHose(warehouse_id,warehouse_name,Available_space);
    return res.json({
        result:result
    })
}

module.exports={
    listWareHouseByGet,
    createWareHouseByPost,
    deleteWareHouseByDelete,
    updateWareHouseByPut

}