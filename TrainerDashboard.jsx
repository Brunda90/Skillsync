import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { BookOpen, User, BarChart } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";


const TrainerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#e0f2fe] to-[#d1fae5]">
      <Navbar title="Trainer Dashboard" />
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 drop-shadow">
            🎓 Welcome, Master Trainer!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Manage courses, guide learners, and track their journey 📈
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <DashboardCard
            icon={BookOpen}
            title="Course Management"
            description="Design, edit, and manage training courses."
            color="#6366F1" // Indigo
          />
          <DashboardCard
            icon={User}
            title="Learner Progress"
            description="Track attendance and learner completion status."
            color="#EC4899" // Pink
          />
          <DashboardCard
            icon={BarChart}
            title="Reports"
            description="View analytics on course performance."
            color="#F59E0B" // Amber
          />
</div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
