const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)



const createReport=async ()=>{
    try {
        const revenue=await db('customers').sum('payment_amount as totalPayment').first()
        const totalPayment = revenue.totalPayment || 0;

        const expenses_e=await db('employees').sum('salary as sumOfSalary').first()
        const expenses_m=await db('mechanisms').sum('Price as sumOfPrice').first()
        const totalExpenses=(expenses_e.sumOfSalary ||0)+(expenses_m.sumOfPrice ||0)

        const result=await db('financial_reports').insert({
            revenue:totalPayment,
            expenses:totalExpenses,
            profit:(totalPayment-totalExpenses)
        })
    }catch (e) {
        return "error"
    }
}
const listReport=async ()=>{
    try {
        const result=await db('financial_reports').select('*')
        return result;
    }catch (e) {
        return "error"
    }
}
const deleteReport=async (reports_id)=>{
    try {
        const result=await db('financial_reports').where('reports_id',reports_id).del()
        return "done"
    }catch (e) {
        return"error"
    }
}



module.exports={
    createReport,
    listReport,
    deleteReport
}