import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { PropertiesProvidor } from "./contexts/PropertiesContext.jsx";

createRoot(document.getElementById("root")).render(
  <PropertiesProvidor>
    <StrictMode>
      <App />
    </StrictMode>
  </PropertiesProvidor>
);
