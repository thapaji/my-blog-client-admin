import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddNew from "./pages/AddNew";
import Profile from "./pages/Profile";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard visible={visible} setVisible={setVisible} />} />
      {/* <Route path="/add" element={<AddNew />} /> */}
      <Route path="/profile" element={<Profile visible={visible} setVisible={setVisible} />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default App;
