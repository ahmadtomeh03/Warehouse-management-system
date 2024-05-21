const {body,param}=require('express-validator')
const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const name =body('name').notEmpty().withMessage('Name is required')
    .custom(async (value)=>{
        const  e_name=await db('employees').where('name',value).first()
        if (e_name){
            return  Promise.reject('This employee Name already exists.')
        }else {
            return Promise.resolve()
        }
    });

const phone=body('phone','phone is required').notEmpty()

const date_join = body('date_join')
    .notEmpty().withMessage('Joining date is required')
    .isISO8601().withMessage('Joining date must be a valid ("YYYY-MM-DD) date')
    .custom( (value) => {
        const inputDate =  new Date(value);
        const today =  new Date();
        if (inputDate > today) {
            throw new Error('Joining date cannot be in the future');
        }
        return true;
    })

const salary=body('salary').notEmpty().withMessage('it is require')

const employee_role	=body('employee_role').notEmpty().withMessage('employee_role is require')

const id=param('id').isInt().withMessage('employee id should be valid')
    .custom(async (val)=> {
        try {
            const e_id=await db('employees').where('id',val).first()
            if (e_id) {
                return Promise.resolve();
            } else {
                return Promise.reject('The employee Id is Invalid');
            }
        } catch (e) {
            return Promise.reject('The employee Id is Invalid');

        }
    })
const createEmployeeValidation=[
    name,
    phone,
    date_join,
    salary,
    employee_role
]
const deleteEmployeeValidation=[
    id
]
const updateEmployeeValidation=[
    id,
    name,
    phone,
    date_join,
    salary,
    employee_role

]
module.exports={
    createEmployeeValidation,
    deleteEmployeeValidation,
    updateEmployeeValidation
}
