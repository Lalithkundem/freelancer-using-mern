import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import sendRegisterationMail  from "../mailServices/mailService.js";
import otpGenerator from "otp-generator";
import sendOtpValidation from "../mailServices/otpMail.js";
import otpStore  from "../server.js";


//@desc Regiter a User
//@route POST /user/register
//@access public
export const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,typeOfUser,password}=req.body;

    if(!name || !email || !typeOfUser || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable=await User.findOne({email});
    if(userAvailable){
        res.send("User Aleardy Registered");
        res.status(400);
        throw new Error("User Already Registered");
    }

    //hashed password
    const hashedPassword=await bcrypt.hash(password,10);
   console.log("hashed password",hashedPassword);

   const user= await User.create({
    name,email,typeOfUser,password:hashedPassword
   })
   console.log("user created: ",user);

   sendRegisterationMail(email, name);

   if(user){
    res.status(201).json({_id:user.id,email:user.email,message:"User Registered Successfully"});
   }else{
    res.status(400);
    throw new Error("User Data not valid")
   }
   res.json({message:"Registeration Successfully"});   
})


//@desc Login a User
//@route POST /user/login
//@access public
export const loginUser=asyncHandler(async(req,res)=>{
    console.log("user login requested..");
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user=await User.findOne({email});

    if(user && await bcrypt.compare(password,user.password)){
        const accessToken=jwt.sign({
            user:{
                name:user.name,
                email:user.email,
                id:user.id
            },
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1m"}
    );
    // const otp=otpGenerator.generate(4,{upperCaseAlphabets:false,specialChars:false,lowerCaseAlphabets:false});
    // otpStore[user.email]={otp,timestamp:Date.now()};

    // sendOtpValidation(user.email,user.username,otp);
    res.status(200).json({token:accessToken,email:user.email,typeOfUser:user.typeOfUser,id:user.id,name:user.name});
    }
    else{
        res.status(401);
        throw new Error("Email or password not valid")
    }
    res.json({message:"Login user"});
})



// const currentUser=asyncHandler(async(req,res)=>{
//     const {otp}=req.body;
//     const users=req.user;
//     if(otpStore[users.email] && otpStore[users.email].otp== otp){
//         const currentTime=Date.now();
//         const otpAge=currentTime-otpStore[users.email].timestamp;
//         if(otpAge>300000) { //OTP valid for 5 minutes
//             return res.json({ valid: false, message: 'OTP expired' });

//         }

//         //valid otp
//         delete otpStore[users.email];
//         return res.json({valid:true,users});
//     }
//        res.json({valid:false,message:"Invalid Otp"});
    
// })

