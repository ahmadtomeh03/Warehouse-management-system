const express=require('express')
const router=express.Router()
const {createMechanismsValidation,deleteMechanismsValidation,updateMechanismsValidation}=require('../validation/mechanisms.validation')
const { mechanismsListByGet,mechanismsCreateByPost,mechanismsDeleteByDelete,mechanismsUpdateByPut}=require('../controller/mechanisms.contoller')
const mechanisms_middel=require('../middleware/mechanisms.middleware')
const AuthenticatedAdmin=require('../../Main/middelware/authentication.middelwareforadmin')


router.post('/mechanisms',AuthenticatedAdmin,mechanisms_middel,createMechanismsValidation,mechanismsCreateByPost)
router.get('/mechanisms',AuthenticatedAdmin,mechanismsListByGet)
router.delete('/mechanisms/:Mechanisms_id',AuthenticatedAdmin,deleteMechanismsValidation,mechanismsDeleteByDelete)
router.put('/mechanisms/:Mechanisms_id',AuthenticatedAdmin,updateMechanismsValidation,mechanismsUpdateByPut)












module.exports=router;