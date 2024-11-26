import {RouterProvider} from "react-router-dom";
import {UiProvider} from "./context/uiContext.tsx";
import router from "./router";

function App() {
    return (
        <UiProvider>
            <RouterProvider router={router}/>
        </UiProvider>


    )
}

export default App