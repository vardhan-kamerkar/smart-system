"use client"; 
import { useEffect, useState } from "react"; 
import { useParams } from "next/navigation";

export default function ProductDetail() { 
    const { id } = useParams(); 
    const [services, setServices] = useState(null);

useEffect(() => { 
    fetch("/api/services").then(res => res.json()).then(data => {
        const found = data.find(s => s._id === id);
        setServices(found);
    });
}, [id]);

if (!services) return <div>Loading...</div>;

return ( 
   <div className="min-h-screenbg-gray-100 p-6">
    <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto"> 
    <h1 className="text-2xl font-bold">{services.name}</h1>
    <p className="text-gray-600 my-3">{services.description}</p>  
    </div> 
    </div>
); 
}

