"use client";
import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    image: "",
  });
  const [forme, setForme] = useState({
    name: "",
    category: "",
    description: ""
  });

  // ================= LOAD DATA =================
  const loadProducts = () => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  };

  const loadServices = () =>{
    fetch("/api/services").then(res => res.json()).then(setServices);
  };

  const loadEnquiries = () => {
    fetch("/api/enquiry")
      .then(res => res.json())
      .then(setEnquiries);
  };

  useEffect(() => {
    loadProducts();
    loadEnquiries();
    loadServices();
  }, []);

  // ================= ADD PRODUCT =================
  const addProduct = async () => {
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  
    setForm({ name: "", category: "", description: "", image: "" });
    loadProducts();
  };
  const addService = async () => {
    await fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forme),
    });  
   setForme({ name: "", category: "", description: ""});
    loadServices();
  };

  // ================= DELETE PRODUCT =================
  const deleteProduct = async (id) => {
    const confirmDelete = confirm("Delete this product?");
    if (!confirmDelete) return;

    await fetch("/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadProducts();
  };

  // ================= EDIT =================
  const startEdit = (p) => {
    setEditing(p._id);
    setForm({
      name: p.name,
      category: p.category,
      description: p.description,
      image: p.image,
    });
  };

  const saveEdit = async () => {
    await fetch("/api/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: editing, ...form }),
    });

    setEditing(null);
    setForm({ name: "", category: "", description: "", image: "" });
    loadProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* ================= STATS ================= */}
      <div className="flex gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow w-40">
          <p className="text-gray-500">Products</p>
          <h2 className="text-xl font-bold">{products.length}</h2>
        </div>

        <div className="bg-white p-4 rounded shadow w-40">
          <p className="text-gray-500">Enquiries</p>
          <h2 className="text-xl font-bold">{enquiries.length}</h2>
        </div>
      </div>

      {/* ================= ADD / EDIT FORM ================= */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {editing ? "Edit Product" : "Add Product"}
        </h2>

        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Category"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />

        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />

        <textarea
          className="w-full border p-2 mb-2 rounded"
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <button
          onClick={editing ? saveEdit : addProduct}
          className={`w-full text-white py-2 rounded ${
            editing ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {editing ? "Save Changes" : "Add Product"}
        </button>
      </div>
      
  <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-md">

        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Name"
          value={forme.name}
          onChange={e => setForme({ ...forme, name: e.target.value })}
        />

        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Category"
          value={forme.category}
          onChange={e => setForme({ ...forme, category: e.target.value })}
        />

        <textarea
          className="w-full border p-2 mb-2 rounded"
          placeholder="Description"
          value={forme.description}
          onChange={e => setForme({ ...forme, description: e.target.value })}
        />

        <button onClick={addService}></button>
      </div>
          

      {/* ================= PRODUCT LIST ================= */}
      <h2 className="text-xl font-bold mb-3">Products</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {products.map(p => (
          <div
            key={p._id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            

            <h2 className="font-semibold text-lg">{p.name}</h2>
            <p className="text-gray-600 text-sm">{p.description}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => startEdit(p)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(p._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= ENQUIRIES ================= */}
      <h2 className="text-xl font-bold mb-3">Recent Enquiries</h2>

      <div className="bg-white rounded-xl shadow p-4 overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Product</th>
              <th className="p-2">Message</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map(e => (
              <tr key={e._id} className="border-b">
                <td className="p-2">{e.name}</td>
                <td className="p-2">{e.email}</td>
                <td className="p-2">{e.phone}</td>
                <td className="p-2">{e.product}</td>
                <td className="p-2">{e.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
