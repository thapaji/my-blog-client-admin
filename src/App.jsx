import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard visible={visible} setVisible={setVisible} />}
        />
        <Route path="/profile" element={<Profile visible={visible} setVisible={setVisible} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
