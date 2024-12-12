import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./../components/page";
import {
    HomePage,
    MenuPage,
    Page404
} from "./pages";
import {BASE_URL} from "../constants.ts";

export default createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <Page404/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/menu",
                element: <MenuPage/>
            }

        ]
    }
],
    {
        basename: BASE_URL
    });