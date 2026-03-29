import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
    name: String, 
    category: String, 
    description: String, 
    image: String, 
});

export default mongoose.models.Product || mongoose.model("Product", schema);

