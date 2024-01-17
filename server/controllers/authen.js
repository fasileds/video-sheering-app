import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken";
export const signup = async (req,res)=>{

try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({...req.body, password:hash})
await newUser.save()
res.status(200).send("user has ben create ")
}
catch (err){
res.send(err)
}
} 
export const signin = async (req,res)=>{

    try{
        const user = await user.findOne({name:req.body.name})
        if(!user){
           return res.status(404).send("there is no user registered")
        }
        const isCorect = await bcrypt.compare(req.body.password,user.password)
        if(!isCorect){
          return  res.status(400).send("the password is incorect")
        }
        const token = jwt.sign({id:user._id},"fasiledes")

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(user)
    }
    catch (err){
    res.send(err)
    }
    } 
