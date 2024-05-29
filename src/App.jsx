import React from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

export default App;
