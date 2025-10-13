import { createBrowserRouter } from "react-router";
import Root from './../Layouts/Root';
import ErrorPage from './../Pages/ErrorPage';
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage/>,
        hydrateFallbackElement: <p>Loading...</p>,
        children:[
           {
            index: true,
            Component: Home
           },
           {
            path: '/apps',
            Component: Apps
           },
           {
            path: '/installation',
            Component: Installation
           }
        ]
    }
])

export default router