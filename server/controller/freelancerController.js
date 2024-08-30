import asyncHandler from "express-async-handler";
import FreelancerModel from "../models/FreelancerModel.js";
import StatusModel from "../models/StatusModel.js";


//@desc Get all Freelancer
//@route GET /getallfreelancers
//@access private
export const GetAllFreelancers=asyncHandler(async(req,res)=>{
    const users=await FreelancerModel.find();
    if(!users){
        res.status(400);
        throw new Error("No Data Found")
    }
    res.status(200).json(users);
})

//@desc Get Freelancer
//@route GET /getallfreelancers/:id
//@access private
export const GetFreelancer=asyncHandler(async (req, res) => {
    const { id: user_id } = req.params;
    console.log("Get freelancer called:", user_id);
    
    const user = await FreelancerModel.findOne({ user_id });
    if (!user) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    console.log(user);
    
    res.status(200).json(user);
})


//@desc Add Details
//@route POST /user/register
//@access private
export const AddFreelancerDetails = asyncHandler(async (req, res) => {
    const {user_id ,name, email, mobile,amount,description, skills, experience ,location} = req.body;

    if (!user_id ||!name || !email || !mobile||!amount ||!description|| !skills || !experience ||!location) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    try {
        const updatedStatus = await FreelancerModel.findOneAndUpdate(
            { user_id: user_id }, 
            { user_id, name, email, mobile,amount,description, skills, experience,location }, 
            { new: true, upsert: true }
        );

        if (!updatedStatus) {
            res.status(400);
            throw new Error("Status not updated");
        }

        console.log("Freelancer Details Added Successfully", updatedStatus);
        res.status(201).json({ message: "Freelancer Details Added Successfully", data: updatedStatus });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});





//@desc Get Freelancer
//@route GET /getallfreelancers/:id
//@access private
export const GetStatus=asyncHandler(async (req, res) => {
    const { id: freelancer_id } = req.params;
    console.log("Get status data retrieved:", freelancer_id);
    
    const status = await StatusModel.find({ freelancer_id });
    if (!status) {
        return res.status(404).json({ message: "Status not found" });
    }
    
    console.log("Get status ", status);
    res.status(200).json(status);
});


//@desc Post FreelancerSeen Status
//@route POST /dashboard/:freelancer_email
//@access private
export const AddStatus = asyncHandler(async(req, res) => {
    const { user_id, freelancer_id, name, email } = req.body;
    
    if (!user_id || !freelancer_id || !name || !email) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const updatedStatus = await StatusModel.findOneAndUpdate(
        { user_id, freelancer_id },
        { name, email, viewedAt: new Date() },
        { new: true, upsert: true }
    );

    if (!updatedStatus) {
        res.status(400);
        throw new Error("Status not updated");
    }

    console.log("Freelancer seen status added/updated successfully", updatedStatus);
    res.status(201).json({ message: "Freelancer seen status added/updated successfully" });
});





