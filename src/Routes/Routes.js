import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Homepage from "../Pages/Home/Homepage/Homepage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Services from "../Pages/Services/Services";
import MyBookings from "../Pages/Services/MyBookings";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/service",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      //   {
      //     path: "/about",
      //     element: <About></About>,
      //   },
    ],
  },
]);
