import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App";

const basename =
  process.env.NODE_ENV === "production" ? "/react-portfolio" : "/";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
