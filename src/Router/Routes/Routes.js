import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Join from "../../Pages/Join/Join";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/join',
                element: <Join></Join>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
        ]
    }
])

export default router;