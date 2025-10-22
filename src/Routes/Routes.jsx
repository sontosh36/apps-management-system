import { createBrowserRouter } from "react-router";
import Root from './../Layouts/Root';
import ErrorPage from './../Pages/ErrorPage';
import Home from "../Pages/Home";
import Installation from './../Pages/Installation';
import Apps from './../Pages/Apps';
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage/>,
        hydrateFallbackElement: <p>Loading...</p>,
        children:[
           {
            index: true,
            Component: Home,
           },
           {
            path: '/apps',
            Component: Apps,
           },
           {
            path: '/installation',
            Component: Installation,
           },
           {
            path: '/app/:id',
            Component: AppDetails,
           }
        ]
    }
])

export default router