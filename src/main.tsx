import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LangProvider } from "./context/LangContext.tsx";
import { ShipmentProvider } from "./context/TrackigNumberContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <ShipmentProvider>
        <App />
      </ShipmentProvider>
    </LangProvider>
  </StrictMode>,
);
