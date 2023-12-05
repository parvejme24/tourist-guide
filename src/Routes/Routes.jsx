import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../components/Blogs/BlogDetails/BlogDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Community from "../Pages/Community/Community";
import PackageDetails from "../components/Home/TravelGuide/PackageDetails/PackageDetails";
import AllPackages from "../components/Home/TravelGuide/AllPackages/AllPackages";
import PrivetRout from "./PrivateRoute";
import TourGuideDetails from "../components/Home/TravelGuide/TourGuideDetails/TourGuideDetails";
import Error from "../Pages/Error/Error";
import TouristDashboard from "../Pages/TouristDashboard/TouristDashboard";
import MyProfile from "./../Pages/TouristDashboard/MyProfile/MyProfile";
import AllUsers from "./../Pages/TouristDashboard/AllUsers/AllUsers";
import MyBooking from "./../Pages/TouristDashboard/MyBooking/MyBooking";
import MyWishlist from "./../Pages/TouristDashboard/MyWishlist/MyWishlist";
import StoryDetail from "../components/Home/TourustStory/StoryDetail";
import AllStories from "../components/Home/TourustStory/AllStories";
import AddPackage from "../Pages/TouristDashboard/AddPackage/AddPackage";
import AdminLoginForm from "../Pages/TouristDashboard/AdminLoginForm/AdminLoginForm";
import UserHome from "../Pages/TouristDashboard/UserHome/UserHome";
import AdminHome from "../Pages/TouristDashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "packages",
        element: (
          <PrivetRout>
            <AllPackages />
          </PrivetRout>
        ),
        loader: () =>
          fetch("https://tourist-guide-server-nine.vercel.app/packages"),
      },
      {
        path: "packageDetails/:id",
        element: (
          <PrivetRout>
            <PackageDetails />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourist-guide-server-nine.vercel.app/packages/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogDetails/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(
            `https://tourist-guide-server-nine.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "tourGuideDetails/:id",
        element: (
          <PrivetRout>
            <TourGuideDetails />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourist-guide-server-nine.vercel.app/tourGuides/${params.id}`
          ),
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "stories/:id",
        element: <StoryDetail />,
        loader: ({ params }) =>
          fetch(
            `https://tourist-guide-server-nine.vercel.app/touristStory/${params.id}`
          ),
      },
      {
        path: "allStories",
        element: <AllStories />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivetRout>
        <TouristDashboard />
      </PrivetRout>
    ),
    children: [
      // normal user routes
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "myBooking",
        element: <MyBooking />,
      },
      {
        path: "myWishlist",
        element: <MyWishlist />,
      },

      // admin routes
      {
        path: "adminHome",
        element: (
          <PrivetRout>
            <AdminHome />
          </PrivetRout>
        ),
      },
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "addPackage",
        element: <AddPackage />,
      },
      {
        path: "login",
        element: <AdminLoginForm />,
      },
    ],
  },
]);

export default router;
