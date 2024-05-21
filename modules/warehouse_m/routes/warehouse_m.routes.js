const express=require('express')
const router=express.Router()
const{createWareHouseValidation,deleteWareHouseValidation,updateWareHouseValidation}=require('../validation/warehouse_m.validation')
const {listWareHouseByGet,createWareHouseByPost,deleteWareHouseByDelete,updateWareHouseByPut}=require('../controller/warehouse_m.controller')
const ware_middel=require('../middelware/warehouse_m.middelware')
const AuthenticatedAdmin=require('../../Main/middelware/authentication.middelwareforadmin')

router.post('/warehouse',AuthenticatedAdmin,ware_middel,createWareHouseValidation,createWareHouseByPost)
router.get('/warehouse',AuthenticatedAdmin,listWareHouseByGet)
router.delete('/warehouse/:warehouse_id',AuthenticatedAdmin,deleteWareHouseValidation,deleteWareHouseByDelete)
router.put('/warehouse/:warehouse_id',AuthenticatedAdmin,updateWareHouseValidation,updateWareHouseByPut)










module.exports=router;