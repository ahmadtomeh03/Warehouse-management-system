const{validationResult, body}=require('express-validator')
const {listReservation,createReservation,deleteReservation}=require('../service/reservation.service')
const listReservationByGet=async (req,res)=>{
    const result =await listReservation();
    return res.json({
        result:result
    })
}

const createReservationByPost=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const{warehouse_id,customer_id}=req.body;
    const result=await createReservation(warehouse_id,customer_id);
    return res.json({
        result:result
    })
}
const deleteReservationByDelete=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const {reservation_id}=req.params;
    const result=await deleteReservation(reservation_id);
    return res.json({
        result:result
    })
}








module.exports={
    listReservationByGet,
    createReservationByPost,
    deleteReservationByDelete
}