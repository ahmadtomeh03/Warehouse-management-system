const knex = require("knex");
const knexConfig = require("../../../knexfile");
const db=knex(knexConfig)

const login=async (Email,password)=>{
    try{
        const customer_result=await db('customers').where('Email',Email).where('password',password)
        if (customer_result.length>0){
            return customer_result
        }
        const admin_result=await db('admin').where('email',Email).where('password',password)
         if (admin_result.length>0){
           return  admin_result
        }
         return null;

    }catch (e) {
        return "error"
    }

}
module.exports={
    login
}