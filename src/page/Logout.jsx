import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("atuhenticated"));
  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("atuhenticated");
    try {
      const response = await axios.post("http://localhost:3000/api/logout", {
        user: user._id,
      });
      navigate("/login");
    } catch (err) {}
  };
  return (
    <form onSubmit={handleLogout}>
      <button>Logout</button>
    </form>
  );
};

export default Logout;
