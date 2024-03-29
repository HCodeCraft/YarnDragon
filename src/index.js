import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { MyProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <MyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyProvider>

);

reportWebVitals();
