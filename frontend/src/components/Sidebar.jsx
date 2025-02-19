import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5 flex flex-col">
      <h2 className="text-xl font-bold mb-6">College Dashboard</h2>
      <nav className="flex-1 space-y-2">
      <NavLink to="/login" className="block p-3 hover:bg-gray-700 rounded">
          Student Login
        </NavLink>
        <NavLink to="/profile" className="block p-3 hover:bg-gray-700 rounded">
          Student Profile
        </NavLink>
        <NavLink to="/elections" className="block p-3 hover:bg-gray-700 rounded">
          Student Election System
        </NavLink>
        <NavLink to="/health-notifications" className="block p-3 hover:bg-gray-700 rounded">
          Automated Health & Leave Notifications
        </NavLink>
        <NavLink to="/facility-booking" className="block p-3 hover:bg-gray-700 rounded">
          Campus Facility Booking System
        </NavLink>
        <NavLink to="/approvals" className="block p-3 hover:bg-gray-700 rounded">
          Transparent Application & Approval System
        </NavLink>
        <NavLink to="/academic-integrity" className="block p-3 hover:bg-gray-700 rounded">
          Academic Integrity & Cheating Record System
        </NavLink>
        <NavLink to="/complaints" className="block p-3 hover:bg-gray-700 rounded">
          Anonymous Complaint System
        </NavLink>
        <NavLink to="/budget-tracking" className="block p-3 hover:bg-gray-700 rounded">
          College Budget Tracking
        </NavLink>
      </nav>
      <NavLink to="/logout" className="mt-auto p-3 bg-red-500 text-white text-center rounded">
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
