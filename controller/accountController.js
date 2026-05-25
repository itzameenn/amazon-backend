import Account from "../model/AccountModel.js"
import jwt from "jsonwebtoken"

export const getUsers = async (req,res)=>{
    
    const users = await Account.find({email: req.user.email})
    res.json(users)
}

export const registerUser = async (req, res) => {

    const existingUser = await Account.findOne({
        email: req.body.email
    })

    if (existingUser) {
        return res.status(400).send("Ulla email adkikunna mone")
    }

    await Account.create({
        email: req.body.email,
        password: req.body.password
    })

    res.send("received")
}

export const loginUser = async(req,res)=>{
    const {email,password}=req.body
   
 try{
       const usr=await Account.findOne({
        email
    })
   
    if(usr){
        if(usr.password==password){
            const token=jwt.sign({email:usr.email}, process.env.JWT_SECRET, { expiresIn: '24h' });


            res.status(200).json({token, user: usr})
        }else{
            res.status(401).send("wrong password")
        }
    }else{
        res.status(401).send("user not found")
    }
 }catch(err){
    res.status(500).send("server error")
 }
}