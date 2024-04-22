import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/user/*",
        element:<Home/>
    }
])