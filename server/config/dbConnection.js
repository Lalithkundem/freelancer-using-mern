import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Via host : ",connect.connection.host);
    }
    catch(err){
        console.log("Database Connection Error : ",err);
        process.exit(1);
    }
}

export default connectDb;