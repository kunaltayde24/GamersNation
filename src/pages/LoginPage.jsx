import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      alert(data.message);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg w-80 space-y-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 rounded bg-gray-700" />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 rounded bg-gray-700" />
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
