import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import AuthLayout from "../layout/AuthLayout";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/category/:id",
                    element:<CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                    hydrateFallbackElement:<Loading></Loading>
                }
            ]

        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>
                }
            ]
            
        },
        {
            path: "/news-details/:id",
            element: (<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>),
            loader: () => fetch('/news.json'),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path: "/*",
            element: <h1>error 404</h1>
        },
    ]
)

export default router;