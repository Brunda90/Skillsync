import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} /> 
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </Router>
    </motion.div>
  );
}

export default App;
