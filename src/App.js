import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Login from "./page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./page/Calculator";
import Logout from "./page/Logout";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/user");
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
