import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import HomeService from "../../Pages/Home/HomeService/HomeService";

import Login from "../../Pages/Login/Login";

import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import Review from "../../Pages/Review/Review";
import ReviewsShow from "../../Pages/Review/ReviewsShow";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/',
                element: <HomeService></HomeService>

            },

            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/AllServices/${params.id}`)


            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/AllServices/${params.id}`)


            },
            {
                path: '/reviews',
                element: <ReviewsShow></ReviewsShow>
            },
            

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    }
]);
export default router;