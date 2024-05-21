const {body,param}=require('express-validator')
const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)


const reports_id=param('reports_id','must write the id for report')
    .custom(async (val)=>{
        try {
            const r_id=await db('financial_reports').where('reports_id',val).first()
            if (r_id){
                return Promise.resolve()
            }else {
                return Promise.reject("the ID invalid")
            }

        }catch (e) {
            return Promise.reject("the ID invalid")
        }
    })

const deleteReportValidation=[
    reports_id
]
module.exports={
    deleteReportValidation
}