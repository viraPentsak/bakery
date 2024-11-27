import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./../components/page";
import {
    HomePage,
    MenuPage,
    Page404
} from "./pages";

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
]);