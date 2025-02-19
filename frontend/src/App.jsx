import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Profile from "./pages/Profile.jsx";
import Elections from "./pages/Elections.jsx";
import HealthNotifications from "./pages/HealthNotifications.jsx";
import FacilityBooking from "./pages/FacilityBooking.jsx";
import Approvals from "./pages/Approvals.jsx";
import AcademicIntegrity from "./pages/AcademicIntegrity.jsx";
import Complaints from "./pages/Complaints.jsx";
import BudgetTracking from "./pages/BudgetTracking.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-5">
          <Routes>
          <Route path="login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/elections" element={<Elections />} />
            <Route path="/health-notifications" element={<HealthNotifications />} />
            <Route path="/facility-booking" element={<FacilityBooking />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/academic-integrity" element={<AcademicIntegrity />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/budget-tracking" element={<BudgetTracking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
