import asyncHandler from"express-async-handler";
import jwt from "jsonwebtoken";

const validateToken=asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        if(!token){
            res.status(400);
            throw new Error("User is not authorized or token id missing");
        }
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                if (err.name === 'TokenExpiredError') {
                    res.status(401).json({ message: "Token has expired" });
                } else {
                    res.status(401).json({ message: "User is not authorized" });
                }
                return;
            }
            req.user=decoded.user;
            next();
        });
       
    } else {
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }
})
export default validateToken;