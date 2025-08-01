import React from "react";

const DashboardCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow"
        style={{
          backgroundColor: `${color}33`,
          color: color,
        }}
      >
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      
    </div>
    
  );
};

export default DashboardCard;
