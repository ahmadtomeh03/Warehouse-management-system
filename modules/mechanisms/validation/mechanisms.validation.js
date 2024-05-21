const {body,param}=require('express-validator')
const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const Mechanisms_Name=body('Mechanisms_Name').notEmpty().withMessage('nome of Mechanisms is require')
const Price=body('Price').notEmpty().withMessage('the price of Mechanisms is require ')
const Mechanisms_id=param('Mechanisms_id').isInt().withMessage('Mechanisms id is require. ')
.custom(async (val)=>{
    try {
        const m_id=await db('mechanisms').where('Mechanisms_id',val).first()
        if (m_id){
            return Promise.resolve()
        }else {
            return Promise.reject("the ID invalid")
        }

    }catch (e) {
        return Promise.reject("the ID invalid")
    }
})
const createMechanismsValidation=[
    Mechanisms_Name,
    Price
]
const deleteMechanismsValidation=[
    Mechanisms_id
]
const updateMechanismsValidation=[
    Mechanisms_id,
    Mechanisms_Name,
    Price
]
module.exports={
    createMechanismsValidation,
    deleteMechanismsValidation,
    updateMechanismsValidation
}