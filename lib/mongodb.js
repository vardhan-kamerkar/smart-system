import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
export async function connectDB() { 
    if (mongoose.connections.readyState >= 1) 
    {
        console.log("using existing connection");
        return; 
    }
    try{
    await mongoose.connect(MONGODB_URI);
    console.log("successfully connected to mongodb"); 
}catch(error){
    console.log("mongodb connection error",error);
}
}
