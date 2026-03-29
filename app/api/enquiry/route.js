import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function GET() { 
    try{
    await connectDB(); 
    const data = await Enquiry.find().sort({ createdAt: -1 }); 
    return Response.json(data); 
}catch(err){
    console.log("error",err);
    return Response.json({ error:"failed to fetch"},{status:500});
}
}

export async function POST(req) { 
    try{
        await connectDB(); 
    const body = await req.json(); 
    const data = await Enquiry.create(body); 
    return Response.json(data); 
}catch(err){
    console.log("post error:",err);
    return Response.json({error:"failed to save"},{status:500})
}
}