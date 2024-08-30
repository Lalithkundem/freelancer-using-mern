import mongoose from "mongoose";

const FreelancerSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: [true, "please provide username"],
    },
    email: {
        type: String,
        required: [true, "please provide email"],
    },
    mobile: {
        type: String,
        required: [true, "please provide mobile number"],
    },
    description: {
        type: String,
        required: [true, "please provide description"],
    },
    amount: {
        type: Number,
        required: [true, "please provide amount"],
    },
    skills: {
        type: [String],
        required: [true, "please provide skills"],
    },
    experience: {
        type: Number,
        required: [true, "please provide experience"],
    },
    location: {
        type: String,
        required: [true, "please provide location"],
    },
}, {
    timestamps: true
});

const FreelancerModel= mongoose.model("freelancerData", FreelancerSchema);
export default FreelancerModel;

