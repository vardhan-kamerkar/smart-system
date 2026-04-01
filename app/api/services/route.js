import { connectDB } from "@/lib/mongodb"
import Service from "@/models/Service";

export async function GET() { 
    try{
    await connectDB(); 
    const data = await Service.find(); 
    return Response.json(data);
    }catch(error){
        console.log("database error",error);
    } 
}
export async function POST(req) { 
    await connectDB(); 
    const body = await req.json(); 
    const data = await Service.create(body); 
    return Response.json(data); 
}