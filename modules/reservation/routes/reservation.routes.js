const express =require('express')
const router=express.Router()

const {createReservationValidation,deleteReservationValidation}=require('../validation/reservation.validation')
const{listReservationByGet,createReservationByPost,deleteReservationByDelete}=require('../controller/reservation.controller')
const reservation_middel=require('../middelware/reservation.middelware')
const AuthenticatedAdmin=require('../../Main/middelware/authentication.middelwareforadmin')


router.post('/reservation',AuthenticatedAdmin,createReservationValidation,createReservationByPost)
router.get('/reservation',AuthenticatedAdmin,listReservationByGet)
router.delete('/reservation/:reservation_id',AuthenticatedAdmin,deleteReservationValidation,deleteReservationByDelete)









module.exports=router;