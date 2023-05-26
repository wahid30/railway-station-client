import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Homepage from "../Pages/Home/Homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
    //   {
    //     path: "/login",
    //     element: <Login></Login>,
    //   },
    //   {
    //     path: "/register",
    //     element: <Register></Register>,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact></Contact>,
    //   },
    //   {
    //     path: "/service",
    //     element: <Service></Service>,
    //   },
    //   {
    //     path: "/about",
    //     element: <About></About>,
    //   },
    ]
  },
]);