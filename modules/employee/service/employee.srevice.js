const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)



const employeeCreate=async (name,phone,date_join,salary,employee_role)=>{
    try {
        const result=await db('employees').insert({
            name:name,
            phone:phone,
            date_join:date_join,
            salary:salary,
            employee_role:employee_role
        });
        return "the employee added";
    }catch (e) {
        return "the employee doesn't Added";
    }
}

const employeeList=async()=>{
    try {
        const resutl=await db('employees').select('*')
        return resutl;
    }catch (e) {
        return "error"
    }
}
const employeeDelete=async (id)=>{
    try {
        const result=await db('employees').where('id',id).del()
        return result;
    }catch (e) {
        return "error"
    }
}
const employeeUpdate=async (id,name,phone,date_join,salary,employee_role)=>{
    try {
        const result=await db('employees').where('id',id)
            .update({
                name:name,
                phone:phone,
                date_join:date_join,
                salary:salary,
                employee_role:employee_role
            })
        return "the updated was successful for this id : " + id;
    }catch (e) {
        return "error"
    }
}
module.exports={
    employeeCreate,
    employeeList,
    employeeDelete,
    employeeUpdate
}