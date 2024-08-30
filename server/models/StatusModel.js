import mongoose from "mongoose";

const FreelancerSeenSchema=mongoose.Schema({
    user_id:{
        type:String,
        required:true,
        
    },
    freelancer_id:{
        type:String,
        required:[true,"Please provide freelancer_id"]
    },
    name:{
        type:String,
        required:[true,"please provide username"],
    },
    email:{
        type:String,
        required:[true,"please provide email"],
    },
    viewedAt: {
        type: Date,
        default: Date.now
    }
},{
    timestamps:true
});

const StatusModel= mongoose.model("seenStatus",FreelancerSeenSchema);
export default StatusModel;