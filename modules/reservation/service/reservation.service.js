const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const listReservation=async()=>{
    try {
        const result=await db('reservation').select('*')
        return result;
    }catch (e) {
        return "error"
    }
}

const createReservation=async (warehouse_id,Customers_id)=>{
    try {
        const reserved_space=(await db('customers').where('Customers_id',Customers_id).select('reserved_space'))[0].reserved_space
        const reservation_date=  new Date()
        const result=await db('reservation').insert({
            warehouse_id:warehouse_id,
            customer_id:Customers_id,
            reserved_space:reserved_space,
            reservation_date:reservation_date

        })
        return "done"
    }catch (e) {
        return"error"
    }
}
const deleteReservation=async (reservation_id)=>{
    try {
        const result=await db('reservation').where('reservation_id',reservation_id).del()
        return "the deleted successfully for this id "+reservation_id
    }catch (e) {
        return"the deleted doesn't successfully "
    }
}

module.exports={
    listReservation,
    createReservation,
    deleteReservation
}