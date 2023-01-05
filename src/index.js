import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { appContent, AppContext } from "./appState/context/appContext";


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppContext.Provider value={appContent}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);
