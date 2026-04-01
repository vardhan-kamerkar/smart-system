"use client"; 
import { useEffect, useState } from "react";
import './index.css'

export default function Home() { 
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

useEffect(() => { 
  fetch("/api/products").then(res => res.json()).then(setProducts); }, 
  []);
useEffect(() => { 
  fetch("/api/services").then(res => res.json()).then(setServices); }, 
  []);  

return ( 
<div className="min-h-screenbg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb6">products</h1>
  <div className="grid md:grid-cols-3gap-6">
  {products.map(p =>(
    <div key={p._id}className="bg-white p-4 rounded-xl shadowhover:shadow-lg transition">
      <img
              src={p.image || "https://via.placeholder.com/300"}
              alt={p.name}
              className="w-full h-32 object-cover object-center rounded mb-2"
            />
      <h2 className="text-xl font-semibold">{p.name}</h2>
      <p className="text-gray-600">{p.description}</p>
      <a href={'/product/${p._id}'}className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded"></a>
      </div>
  ))}
</div>
<h1 className="text-3xl font-bold text-center mb6">services</h1>
<div className="grid md:grid-cols-3gap-6">
  {services.map(s =>(
    <div key={s._id}className="bg-white p-4 rounded-xl shadowhover:shadow-lg transition">
      
      <h2 className="text-xl font-semibold">{s.name}</h2>
      <p className="text-gray-600">{s.description}</p>
      <a href={'/service/${s._id}'}className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded"></a>
      </div>
  ))}
</div>
<a href="/contact"><button>enquiry now</button></a>
</div>

);
}
