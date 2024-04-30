import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import { Cadastros } from "./Pages/Cadastros/Cadastros";
import { Agendamentos } from "./Pages/Agendamentos/Agendamentos";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user/*",
    element: <Home />,
  },
  {
    path: "/user/cadastros",
    element: <Cadastros />,
  },
  {
    path:"/user/agendamentos",
    element:<Agendamentos/>
  }
]);
