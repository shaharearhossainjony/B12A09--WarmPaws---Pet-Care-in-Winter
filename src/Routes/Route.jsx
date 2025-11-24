import { createBrowserRouter } from "react-router";
import HomeLayout from "../Pages/HomeLayout";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Profile from "../Components/Profile/Profile";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import ProfileUpdate from "../Components/ProfileUpdate/ProfileUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/profile/update",
        element: <ProfileUpdate></ProfileUpdate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;