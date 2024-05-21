const knex=require('knex')
const knexConfig=require('../../../knexfile')
const db=knex(knexConfig)

const mechanismsList=async ()=>{
    try{
        const result=await db('mechanisms').select('*')
        return result;
    }catch (e) {
        return "error"
    }
}
const mechanismsCreate=async (Mechanisms_Name,Price)=>{
    try {
        const result=await db('mechanisms').insert({
            Mechanisms_Name:Mechanisms_Name,
            Price:Price
        });
        return "the Mechanisms added ."
    }catch (e) {
        return "the Mechanisms doesn't added ."
    }

}

const mechanismsDelete=async (Mechanisms_id)=>{
    try {
        const result=await db('mechanisms').where('Mechanisms_id',Mechanisms_id).del()
        return "the mechanisms id  "+ Mechanisms_id +"deleted successfully "
    }catch (e) {
        return "error"
    }

}
const mechanismsUpdate=async (Mechanisms_id,Mechanisms_Name,Price)=>{
    try{
        const result=await db('mechanisms').where('Mechanisms_id',Mechanisms_id).update({
            Mechanisms_Name:Mechanisms_Name,
            Price:Price
        })
        return "the Mechanisms id  "+ Mechanisms_id +"updated successfully"
    }catch (e) {
        return "error"
    }
}






module.exports={
    mechanismsList,
    mechanismsCreate,
    mechanismsDelete,
    mechanismsUpdate
}