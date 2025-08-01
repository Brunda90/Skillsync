import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { BookOpen, CheckCircle, Bell } from "lucide-react";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3]">
      <Navbar title="Employee Dashboard" />
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md">
            👋 Hey there, Rockstar!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Ready to crush your training goals today? 💪
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard
            icon={BookOpen}
            title="📚 My Courses"
            description="Explore and enroll in your assigned and optional training courses."
            color="#3B82F6"
          />
          <DashboardCard
            icon={CheckCircle}
            title="✅ Progress Tracker"
            description="See how far you've come and what’s left to conquer!"
            color="#10B981"
          />
          <DashboardCard
            icon={Bell}
            title="🔔 Notifications"
            description="Stay informed with upcoming sessions and alerts."
            color="#FBBF24"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
