const express=require('express')
const router=express.Router()

const {deleteReportValidation}=require('../validation/financial_reports.validation')
const{createReportByPost,listReportByGet,deleteReportByDelete}=require('../controller/financial_reports.controller')
const report_middel=require('../middelware/financial_reports.middelware')
const AuthenticatedAdmin=require('../../Main/middelware/authentication.middelwareforadmin')

router.post('/financial_reports',AuthenticatedAdmin,report_middel,createReportByPost)
router.get('/financial_reports',AuthenticatedAdmin,listReportByGet)
router.delete('/financial_reports/:reports_id',AuthenticatedAdmin,deleteReportValidation,deleteReportByDelete)













module.exports=router;
