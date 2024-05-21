const {body,param}=require('express-validator')
const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)


const warehouse_id=body('warehouse_id','you must write warehouse id')
    .custom(async (val)=>{
        try {
            const w_id=await db('warehouse').where('warehouse_id',val).first()
            if (w_id){
                return Promise.resolve()
            }else {
                return Promise.reject("the warehouse ID invalid")
            }

        }catch (e) {
            return Promise.reject("the warehouse ID invalid")
        }
    })
const customer_id=body('customer_id','you must write customer id')
    .custom(async (val)=>{
        try {
            const c_id=await db('customers').where('Customers_id',val).first()
            if (c_id){
                return Promise.resolve()
            }else {
                return Promise.reject("the customer ID invalid")
            }

        }catch (e) {
            return Promise.reject("the customer ID invalid")
        }
    })

const reservation_id=param('reservation_id','the reservation id is require')
    .custom(async (val)=>{
        try {
            const r_id=await db('reservation').where('reservation_id',val).first()
            if (r_id){
                return Promise.resolve()
            }else {
                return Promise.reject("the reservation id invalid")
            }

        }catch (e) {
            return Promise.reject("the reservation id invalid")
        }
    })

const createReservationValidation=[
    warehouse_id,
    customer_id
]
const deleteReservationValidation=[
    reservation_id
]

module.exports={
    createReservationValidation,
    deleteReservationValidation
}