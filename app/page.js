"use client"; 
import { useEffect, useState } from "react";
import './index.css'
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

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
<div className="min-h-screen flex flex-col bg-[length:400%_400%] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 animate-[gradientMove_12s_ease_infinite]">
  <Navbar></Navbar>
 <div className="text-center mb-10">
  <h1 className="text-4xl font-bold text-black-800 mb-2">products</h1>
 </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {products.map(p =>(
    <div key={p._id}className="relative rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group hover:scale-[1.02]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-600 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-xl"></div>
      <img
              src={p.image || "https://via.placeholder.com/300"}
              alt={p.name}
              className="w-full h-48 object-cover group-hover:scale-106 transition duration-300"
            />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h2>
      <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
      <a href={'/product/${p._id}'}className="mt-3 inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-400/60 transition"></a>
      </div>
  ))}
</div>
<div className="text-center mb-10">
<h1 className="text-3xl font-bold text-black-800 mb6">services</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {services.map(s =>(
    <div key={s._id}className="relative rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group hover:scale-[1.02]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-600 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-xl"></div> 
      <h2 className="text-xl font-semibold">{s.name}</h2>
      <p className="text-gray-600">{s.description}</p>
      <a href={'/service/${s._id}'}className="mt-3 inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-400/60 transition"></a>
      </div>
  ))}
</div>
<div className="flex justify-center"><a href="/contact"><button className="w-full bg-blue-500 text-white py-2 rounded">enquiry now</button></a></div>
<Footer></Footer>
<style jsx global>{`
@keyframes gradientMoe {
0% { background-position: 0% 50%}
50% { background-position: 100% 50%}
100% { background-position: 0% 50%}
}
`}
</style>
</div>

);
}
