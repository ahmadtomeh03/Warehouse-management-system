const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const listWareHouse=async ()=>{
    try{
        const result=await db('warehouse').select('*')
        return result;
    }catch (e) {
        return "error"
    }
}
const createWareHouse=async (warehouse_name,Available_space)=>{
    try {
        const result=await db('warehouse').insert({
            warehouse_name:warehouse_name,
            Available_space:Available_space
        })
        return "the warehouse added successfully"
    }catch (e) {
        return "the warehouse doesn't added"
    }
}
const deleteWareHouse=async (warehouse_id)=>{
    try {
        const result=await db('warehouse').where('warehouse_id',warehouse_id).del()
        return "the warehouse Id "+warehouse_id +" deleted successfully"
    }catch (e) {
        return "error"
    }
}
const updateWareHose=async (warehouse_id,warehouse_name,Available_space)=>{
    try {
        const result=await db('warehouse').where('warehouse_id',warehouse_id).update({
            warehouse_name:warehouse_name,
            Available_space:Available_space
        })
        return "the warehouse Id "+warehouse_id +" updated successfully"
    }catch (e) {
        return "error"
    }
}

module.exports={
    listWareHouse,
    createWareHouse,
    deleteWareHouse,
    updateWareHose
}