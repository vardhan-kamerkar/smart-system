"use client"; 
import { useEffect, useState } from "react"; 
import { useParams } from "next/navigation";

export default function ProductDetail() { 
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

useEffect(() => { 
    fetch("/api/products").then(res => res.json()).then(data => {
        const found = data.find(p => p._id === id);
        setProduct(found);
    });
}, [id]);

if (!product) return <div>Loading...</div>;

return ( 
   <div className="min-h-screenbg-gray-100 p-6">
    <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto"> 
    <img src={product.image}alt={product.name}/>
    <h1 className="text-2xl font-bold">{product.name}</h1>
    <p className="text-gray-600 my-3">{product.description}</p> 
    <a href={'/contact?product=${product.name}'}className="bg-green-500 text-white px-4 py-2 rounded">Enquire Now</a> 
    </div> 
    </div>
); 
}

