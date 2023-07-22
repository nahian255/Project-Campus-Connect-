import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Colleges from "../pages/college/Colleges";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/myCollege/MyCollege";

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

        ]
    },

]);




export default router;