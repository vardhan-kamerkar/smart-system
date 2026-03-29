const schema = new mongoose.Schema({ 
    title: String, 
    description: String, 
    image: String, 
});

export default mongoose.models.Service || mongoose.model("Service", schema);

