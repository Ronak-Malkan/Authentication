import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Auth0ProviderWithWrapper } from "./Auth0ProviderWrapper";
import "./styles/style.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithWrapper>
        <App />
      </Auth0ProviderWithWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
