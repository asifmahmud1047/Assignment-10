import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Allvisa from "./Page/Allvisas/Allvisa.jsx";
import Addvisa from "./Page/Addvisa/Addvisa.jsx";
import Addedvisa from "./Page/Addedvisa/Addedvisa.jsx";
import Application from "./Page/Application/Application.jsx";
import Login from "./Page/Login/Login.jsx";
import Signup from "./Page/Signup/Signup.jsx";
import Authprovider from "./Authprovider/Authprovider.jsx";
import { ToastContainer } from "react-toastify";
import Errorpage from "./Page/Errorpage/Errorpage.jsx";
import Homelayout from "./Components/Homelayout/Homelayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Homelayout></Homelayout>,
      },
      {
        path: "/allvisa",
        element: <Allvisa></Allvisa>,
      },
      {
        path: "/addvisa",
        element: <Addvisa></Addvisa>,
      },
      {
        path: "/addedvisa",
        element: <Addedvisa></Addedvisa>,
      },
      {
        path: "/addedvisa",
        element: <Application></Application>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
