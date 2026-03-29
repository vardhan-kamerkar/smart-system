"use client"; 
import { useState } from "react"; 
import { useRouter } from "next/navigation";

export default function Login() { 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const router = useRouter();

const login = async () => { 
    const res = await fetch("/api/auth/login", { 
        method: "POST", 
        body: JSON.stringify({ email, password }), 
    });

const data = await res.json();

if (data.token) {
  localStorage.setItem("token", data.token);
  router.push("/admin");
} else {
  alert("Login failed");
}

};

return ( 
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
<div className="bg-white p-6 rounded-xl shadow w-80"> 
    <h1 className="text-xl font-bold mb-4">Login</h1> 
    <input className="w-full border p-2 mb-2" placeholder="email" onChange={e => setEmail(e.target.value)} /> 
    <input className="w-full border p-2 mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /> 
    <button onClick={login}className="w-full bg-blue-500 text-white py-2 rounded">Login</button> 
    </div> 
    </div>
    ); 
}
