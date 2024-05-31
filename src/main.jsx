import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux-store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
