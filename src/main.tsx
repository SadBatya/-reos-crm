import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import "./i18n.ts";
import { Suspense } from "react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
