import { User} from "../Models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req,res)=>{
    const {name,gmail,password} = req.body
    
    try {
     let user = await User.findOne({gmail})

     if(user) return res.json({message:"user already exist"});

     const hashpass = await bcrypt.hash(password,10)
     
     user  = await user.create({name,gmail,password:hashpass})

     res.json({message:"user register successfully..!",user})

    } catch (error) {
        res.json({message:error})
    }
}

export const login = async (req,res) =>{
    const {gmail,password} = req.body

    try {
        let user  = await User.findOne({gmail});
     //console.log("user is coming from the login",user)

        if(!user) return res.json({message:"user not exist..!"})

        const validpass = await bcrypt.compare(password,user.password);

        if(!validpass) return res.json({message:"invalid credentials"});

      const token = jwt.sign({userId:user._id},"!@$$*&*",{

      expiresIn:"1d"
      })

        res.json({message:`welcome ${user.name}`,token})
    } 
    catch (error) {
        res.json({message:error.message})
    }
}

export const profile = async (req,res) =>{
    res.json({user:req.user})
}