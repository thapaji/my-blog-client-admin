import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
