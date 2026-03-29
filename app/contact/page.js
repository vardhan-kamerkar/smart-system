"use client"; 
import ContactForm from "C:\smart-system\smart-system\app\contact\ContactForm.js";

export const dynamic = "force-dynamic";

export default function Contact() { 
    

const submit = async () => { 
    await fetch("/api/enquiry", { 
        method: "POST", 
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(form), 
    }); 
    alert("Submitted"); 
};

return ( 
    <Suspense fallback={<div>loading</div>}>
<div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-md"> 
    <h1 className="text-xl font-bond mb-4">Contact</h1> 
    <input className="w-full border p-2 mb-2" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} /> 
    <input className="w-full border p-2 mb-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} /> 
    <input className="w-full border p-2 mb-2" placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} /> 
    <input className="w-full border p-2 mb-2 bg-gray-200"value={form.product} onChange={e => setForm({ ...form,product: e.target.value})} /> 
    <textarea className="w-full border p-2 mb-2" onChange={e => setForm({ ...form, message: e.target.value })} /> 
        <button onClick={submit}className="w-full bg-blue-500 text-white py-2 rounded">Submit</button> 
        </div> 
        </div>
        </Suspense>
        ); 
    }
