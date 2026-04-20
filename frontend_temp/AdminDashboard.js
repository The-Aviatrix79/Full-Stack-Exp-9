import React from "react";
import axios from "axios";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");

  if (role !== "ADMIN") {
    alert("Access Denied. Admins Only.");
    window.location.href = "/";
    return null;
  }

  const fetchAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/dashboard");
      alert(res.data.message || "Admin dashboard data fetch success");
    } catch(err) {
      alert("Failed to fetch admin data: " + err.message);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {sessionStorage.getItem("user")} (ADMIN role)</p>
      <button className="btn btn-danger me-2" onClick={fetchAdmin}>Admin Data</button>
      <button className="btn btn-secondary" onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
