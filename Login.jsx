import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "employee") navigate("/employee-dashboard");
    else if (role === "trainer") navigate("/trainer-dashboard");
    else if (role === "manager") navigate("/manager-dashboard");
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1740&q=80")',
      }}
    >
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl p-10 rounded-3xl w-full max-w-md text-white">
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-wide drop-shadow">
          Welcome to SkillSync 
        </h1>
        <p className="text-center text-lg text-white/90 mb-6 drop-shadow">
          Your gateway to smarter learning and training ✨
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleLogin("employee")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-transform hover:scale-105 shadow-md"
          >
            Login as Employee
          </button>
          <button
            onClick={() => handleLogin("trainer")}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-xl transition-transform hover:scale-105 shadow-md"
          >
            Login as Trainer
          </button>
          <button
            onClick={() => handleLogin("manager")}
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-transform hover:scale-105 shadow-md"
          >
            Login as Manager
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-white/90">
          Don’t have an account?{" "}
          <a href="/register" className="underline text-white hover:text-gray-200">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
