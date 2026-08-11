import mongoose from "mongoose";

const schema = new mongoose.Schema({ email: String, password: String, resetToken: String, resetTokenExpiry: Date, });

export default mongoose.models.User || mongoose.model("User", schema);
