import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {
                path: '/',
                Component: Home,
            },
            {
                path: "/booking",
                Component: Booking,
            },
            {
                path: "/blog",
                Component: Blogs,
            },
            {
                path: "/error",
                Component: ErrorPage
            }
        ]
    }
])