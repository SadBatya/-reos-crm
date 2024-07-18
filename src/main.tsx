import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import "./i18n.ts";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Header from "./components/Header.tsx";
import Main from "./pages/Main.tsx";
import Tasks from "./pages/Tasks.tsx";

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/tasks',
        element: <Tasks />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback="...loading">
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
