import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Homepage from "../Pages/Home/Homepage/Homepage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Services from "../Pages/Services/Services";

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
    //   {
    //     path: "/contact",
    //     element: <Contact></Contact>,
    //   },
      {
        path: "/service",
        element: <Services></Services>,
      },
    //   {
    //     path: "/about",
    //     element: <About></About>,
    //   },
    ]
  },
]);