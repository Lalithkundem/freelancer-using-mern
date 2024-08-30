import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide username"],
    },
    email:{
        type:String,
        required:[true,"please provide email"],
    },
    typeOfUser:{

        type:String,
        required:[true,"Please Provide User Type"]
    },
    password:{
        type:String,
        required:[true,"please provide password"],
    }
},{
    timestamps:true
});

const User= mongoose.model("user",userSchema);
export default User;