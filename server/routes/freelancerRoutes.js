import express from "express";
import validateToken from "../middleware/validateTokenHandler.js";
import { GetAllFreelancers, GetFreelancer, AddStatus, GetStatus, AddFreelancerDetails } from "../controller/freelancerController.js";
const router=express.Router();

router.use(validateToken);
router.get("/allFreelancers",GetAllFreelancers).get("/freelancer/:id",GetFreelancer).get("/status/:id",GetStatus);
router.post("/addFreelancerDetails",AddFreelancerDetails).post("/addFreelancerSeenStatus",AddStatus);



export { router as freelancerRouter };