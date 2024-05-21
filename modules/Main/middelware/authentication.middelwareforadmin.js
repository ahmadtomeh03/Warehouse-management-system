const jwt=require('jsonwebtoken')

const AuthenticatedAdmin=(req,res,next)=>{
    const token=req.headers.token;
    if (token){
        try {
            const admin=jwt.verify(token,'mySecret')
            next();
        }catch (e) {
            return res.json({
                error: "Invalid token"
            })

        }

    }else {
        res.json({
            error:"token does not exist"
        })
    }

}
module.exports=AuthenticatedAdmin