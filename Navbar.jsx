import React from "react";
import { UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const roleName = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "User";

  return (
    <div className="bg-white/40 backdrop-blur-md px-6 py-4 shadow-md rounded-b-2xl flex items-center justify-between">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500 drop-shadow-sm">
        🚀 {title}
      </h1>

      <div className="flex items-center space-x-3 text-gray-700 font-medium">
        <UserCircle2 size={26} className="text-indigo-600" />
        <Link to="/profile" className="text-sm hover:underline hidden sm:block">
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
