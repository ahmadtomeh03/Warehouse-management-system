const {body,param}=require('express-validator')
const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const warehouse_name=body('warehouse_name').notEmpty().withMessage('warehouse name is require')
const Available_space=body('Available_space').isInt().withMessage('Available space for the warehouse is require')
const warehouse_id=param('warehouse_id').isInt().withMessage('warehouse id is require')
    .custom(async (val)=>{
        try {
            const w_id=await db('warehouse').where('warehouse_id',val).first()
            if (w_id){
                return Promise.resolve()
            }else {
                return Promise.reject("the ID invalid")
            }

        }catch (e) {
            return Promise.reject("the ID invalid")
        }
    })
const createWareHouseValidation=[
    warehouse_name,
    Available_space
]
const deleteWareHouseValidation=[
    warehouse_id
]
const updateWareHouseValidation=[
    warehouse_id,
    warehouse_name,
    Available_space
]
module.exports={
    createWareHouseValidation,
    deleteWareHouseValidation,
    updateWareHouseValidation
}