import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegister = () => {
    if (!form.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    // Save the user using name as key
    localStorage.setItem("user", JSON.stringify(form));
    localStorage.setItem(`user-${form.name}`, JSON.stringify(form)); // for multi-user support

    if (form.role === "employee") navigate("/employee-dashboard");
    else if (form.role === "trainer") navigate("/trainer-dashboard");
    else if (form.role === "manager") navigate("/manager-dashboard");
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1740&q=80")',
      }}
    >
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-8 rounded-2xl w-[90%] max-w-sm text-white shadow-xl">
        <h1 className="text-3xl font-extrabold text-center mb-3 drop-shadow">
          Create Your Account 🌟
        </h1>
        <p className="text-center text-white/80 mb-5 text-sm">
          Start your SkillSync journey today 🚀
        </p>

        <div className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2.5 rounded-md bg-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2.5 rounded-md bg-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2.5 rounded-md bg-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm"
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-2.5 rounded-md bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white text-sm"
          >
            <option value="employee" className="text-black">Employee</option>
            <option value="trainer" className="text-black">Trainer</option>
            <option value="manager" className="text-black">Manager</option>
          </select>

          <button
            onClick={handleRegister}
            className="w-full bg-white text-green-600 font-semibold py-2.5 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm"
          >
            Register & Continue
          </button>
        </div>

        <p className="text-xs text-center text-white/70 mt-5">
          Already have an account?{" "}
          <a href="/" className="underline hover:text-white">
            Go to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
