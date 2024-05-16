import Login from "../features/auth/Login";
import {ROUTER_INIT} from "../config/constant";
import {Navigate} from "react-router-dom";


export const publicRoutes = [
    {
        path: ROUTER_INIT.LOGIN,
        element: <Login />
    },
    {
        path: '*',
        element: <Navigate to={ROUTER_INIT.LOGIN} />
    },
]