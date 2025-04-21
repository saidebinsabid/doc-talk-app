import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
                loader: ()=> fetch('../doctors.json'),
            },
            {
                path: "/booking",
                Component: Booking,
            },
            {
                path: "/details/:id",
                Component: Details,
                hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>,
                loader: ()=> fetch('../doctors.json'),
            },
            {
                path: "/blog",
                Component: Blogs,
                hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>,
                loader: ()=> fetch('../questions.json'),
            },
            {
                path: "/error",
                Component: ErrorPage
            }
        ]
    }
])