import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Colleges from "../pages/college/Colleges";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/myCollege/MyCollege";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'college',
                element: <Colleges />
            },
            {
                path: 'admission',
                element: <Admission />
            },
            {
                path: 'my-college',
                element: <MyCollege />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'profile',
                element: <Profile />
            }

        ]
    },


]);




export default router;