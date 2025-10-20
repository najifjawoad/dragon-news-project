import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Authlayout from "../layouts/Authlayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../components/PrivateRoute";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
     loader: () => fetch("/news.json"),
    hydrateFallbackElement : <Loading></Loading>,
    children: [
      {
        path: "",
        element: <Home></Home>,
       
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement : <Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children : [
      {
        path : '/auth/login',
        element : <LogIn></LogIn>
      },
      {
        path : '/auth/register',
        element : <Register></Register>
      }
    ]
  },
  {
    path: "/newsDetails/:id",
    element:<PrivateRoute>
       <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader : ()=> fetch('/news.json'),
    hydrateFallbackElement : <Loading></Loading>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
