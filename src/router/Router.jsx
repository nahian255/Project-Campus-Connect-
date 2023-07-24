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
import CollegeDatails from "../pages/home/CollegeDatails";
import ResearchPaper1 from "../pages/home/researchPaper/ResearchPaper1";
import ResearchPaper2 from "../pages/home/researchPaper/ResearchPaper2";

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
            },
            {
                path: '/details/:id',
                element: <CollegeDatails></CollegeDatails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/name/${params.id}`);
                },
            },
        ]
    },
    {
        path: '/research-paper-1',
        element: <ResearchPaper1></ResearchPaper1>
    },
    {
        path: '/research-paper-2',
        element: <ResearchPaper2></ResearchPaper2>
    },


]);




export default router;