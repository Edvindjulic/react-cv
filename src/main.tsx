import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import StartPage from "./pages/Startpage.tsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="about" element={<About />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Route>
  )
);

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
