import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import PostDetails from "../../pages/PostDetails/PostDetails";
import Profile from "../../pages/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/myprofile',
                element: <Profile></Profile>
            },
            {
                path: '/postdetails',
                element: <PostDetails></PostDetails>
            }
        ]

    }
])