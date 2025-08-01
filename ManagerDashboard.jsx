import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { Users, ClipboardList, BarChart2 } from "lucide-react";

const ManagerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <Navbar title="Manager Dashboard" />
      <div className="px-6 py-10 max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md">
            🚀 Welcome, Visionary Leader!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Oversee teams, assign courses, and analyze performance—all in one place.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard
            icon={Users}
            title="👥 User Management"
            description="Assign roles, manage employees, and oversee team structures."
            color="#0d6efd"
          />
          <DashboardCard
            icon={ClipboardList}
            title="📖 Course Assignments"
            description="Assign mandatory or optional courses to employees by roles."
            color="#198754"
          />
          <DashboardCard
            icon={BarChart2}
            title="📊 Analytics & Reports"
            description="View detailed training progress and team performance reports."
            color="#dc3545"
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
