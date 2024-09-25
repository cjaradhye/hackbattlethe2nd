import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from './components/SignIn.jsx';
import Home from './components/Home.jsx';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/signin",
    element:<SignIn />
  },{
    path: "/home",
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);