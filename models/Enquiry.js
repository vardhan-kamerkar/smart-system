import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    name: String, 
    email: String, 
    phone: String, 
    product: String, 
    message: String, 
    createdAt: { type: Date, default: Date.now }, 
});

export default mongoose.models.Enquiry || mongoose.model("Enquiry", schema);
