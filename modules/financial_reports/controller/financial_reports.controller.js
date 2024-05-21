const{validationResult, body}=require('express-validator')
const{createReport,listReport,deleteReport}=require('../service/financial_reports.service')
const e = require("express");
const createReportByPost=async (req,res)=>{
    const result=await createReport();
    return res.json({
        result:result
    })
}
const listReportByGet=async (req,res)=>{
    const result=await listReport();
    return res.json({
        result:result
    })
}
const deleteReportByDelete=async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.json({
            errors:errors
        })
    }
    const{reports_id}=req.params;
    const result=await deleteReport(reports_id);
    return res.json({
        result:result
    })
}



module.exports={
    createReportByPost,
    listReportByGet,
    deleteReportByDelete
}