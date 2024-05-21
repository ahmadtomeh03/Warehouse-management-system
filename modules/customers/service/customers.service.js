const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const customerList=async ()=>{
    try{
        const result=await db('customers').select('*')
        return result;
    }catch (e) {
        return "error"
    }
}
const customerIDList=async (Customers_id)=>{
    try {
        const result=await db('customers').where('Customers_id',Customers_id).select('*')
        return result
    }catch (e) {
        return "error"
    }
}
const customerCreate= async (Email,Name,password,phone,reserved_space)=>{
    try {
        const payment_amount=reserved_space*1000;
        const result= await db('customers').insert({
            Email:Email,
            Name:Name,
            password:password,
            phone:phone,
            reserved_space:reserved_space,
            payment_amount:payment_amount
        });
        return "the customer Added ";
    }catch (e) {
        return "the customer doesn't Added";
    }
}
const customerDelete=async (Customers_id)=>{
    try {
        const result=await db('customers').where('Customers_id',Customers_id).del()
        return "the Delete was successful for this id : " + Customers_id;
    }catch (e) {
        return "error"
    }
}
const customerUpdate=async (Customers_id,Email,Name,password,phone,reserved_space)=>{
    try {
        const payment_amount=reserved_space*1000;
        const result=await db('customers').where('Customers_id',Customers_id).update({
            Email:Email,
            Name:Name,
            password:password,
            phone:phone,
            reserved_space:reserved_space,
            payment_amount:payment_amount

        })
        return  "the updated was successful for this id : " + Customers_id;
        
    }catch (e) {
        return "error"
    }
}

module.exports={
    customerCreate,
    customerList,
    customerDelete,
    customerUpdate,
    customerIDList
}