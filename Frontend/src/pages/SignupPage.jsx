import React, { useState } from "react";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
      alert(data.message);
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <form onSubmit={handleSignup} className="bg-gray-800 p-8 rounded-lg w-80 space-y-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
