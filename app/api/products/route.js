import { connectDB } from "@/lib/mongodb"; 
import Product from "@/models/Product";

export async function GET() { 
    try{
    await connectDB(); 
    const data = await Product.find(); 
    return Response.json(data);
    }catch(error){
        console.log("database error",error);
    } 
}
export async function POST(req) { 
    await connectDB(); 
    const body = await req.json(); 
    const data = await Product.create(body); 
    return Response.json(data); 
}
export async function DELETE(req){
    try{
        await connectDB();
        const { id } = await req.json();
        await Product.findByIdAndDelete(id);
        return Response.json({message:"deleted"});
    }catch(err){
        return Response.json({ error:"delete failed"},{status:500});
    }
}
export async function PUT(req){
    try{
        await connectDB();
        const { id,name,category,description,image} = await req.json();
        const updated = await Product.findByIdAndUpdate(
            id,{name,category,description,image},
            {new:true}
        );
        return Response.json(updated);
    }catch(err){
        return Response.json({
            error:"update failed"
        },{status:500});
    }
}
