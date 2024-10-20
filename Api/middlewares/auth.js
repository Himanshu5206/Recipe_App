import { User } from "../Models/User.js";

import jwt from "jsonwebtoken";

export const Authenticate = async(req,res,next) =>{
    const token = req.header("Auth")
    try {
        if(!token) return res.json({Message:"login first"})

          const decode = jwt.verify(token,"!@$$*&*");
          
         // console.log(decode)

          const id = decode.userId
          let user = await user.findById(id)
          if(!user) return res.json({Message:"user not exist"})
        
            res.user = user
            

        next();  
    } 
    catch (error) {
        res.json({Message:error})
    }
}