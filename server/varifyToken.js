import  Jwt  from "jsonwebtoken";
export  const varifyToken=(re,res)=>{
    const token = req.cookies.access_token
    if(!token){
        return res.send("the user is not allowed ti edite")
    }
    Jwt.verify(token,process.env,(err,user)=>{
        if(err){
            return res.send("token note valide")
        }
        req.user=user
        next()
    })
}