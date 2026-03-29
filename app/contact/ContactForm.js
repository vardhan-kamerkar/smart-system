"use client";
import { useState } from "react"; 
import { useSearchParams } from "next/navigation";
export default function ContactForm(){
    const params = useSearchParams();
     const [form, setForm] = useState({ 
        name: "", 
        email: "", 
        phone: "", 
        product: params.get("product") || "", 
        message: "", 
    });
    return(
        <div>
            <h1>contact page</h1>
            <p>Product: {product}</p>
        </div>
    )
}