import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./../components/page";
import Page404 from "./pages/404.tsx";
import HomePage from "./pages/home.tsx";
import MenuPage from "./pages/menu.tsx";

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