import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.js";
import SignIn from "./components/Signin.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/login",
    element: <SignIn />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);