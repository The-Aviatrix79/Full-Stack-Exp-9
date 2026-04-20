import React from "react";
import axios from "axios";

function UserDashboard() {
  const role = sessionStorage.getItem("role");

  if (!role) {
      window.location.href = "/";
      return null;
  }

  const fetchData = async () => {
    try {
      // Mocking the call / expecting backend to be running
      const res = await axios.get("http://localhost:8080/api/user/profile");
      alert(res.data.message || "User profile data fetch success");
    } catch (err) {
      alert("Failed to fetch user data: " + err.message);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>User Dashboard</h2>
      <p>Welcome, {sessionStorage.getItem("user")} (USER role)</p>
      <button className="btn btn-success me-2" onClick={fetchData}>Get Profile</button>
      <button className="btn btn-secondary" onClick={logout}>Logout</button>
    </div>
  );
}

export default UserDashboard;
