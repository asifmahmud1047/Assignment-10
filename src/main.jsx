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
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import VisaDetails from "./Page/VisaDetails/VisaDetails.jsx";

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
        loader: () =>
          fetch("https://assignment-10-server-two-sand.vercel.app/visa"),
      },
      {
        path: "/addvisa",
        element: (
          <PrivateRoute>
            <Addvisa></Addvisa>
          </PrivateRoute>
        ),
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
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <VisaDetails></VisaDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-server-two-sand.vercel.app/visa/${params.id}`
      ),
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
