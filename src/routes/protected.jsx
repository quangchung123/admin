import Test from "../features/admin/Test";
import {handleLoadDataFromStorage} from "../utils/help";
import {LOCAL_STORAGE_KEY} from "../config/constant";
import {Navigate} from "react-router-dom";

const result = handleLoadDataFromStorage(LOCAL_STORAGE_KEY.ACCOUNT_USER);
export const protectedRoutes = [
    {
        path: "/admin",
        element: result? <Test /> : <Navigate to="/login"/>,
        // children: [
        //     { path: "admin", element: <Test /> }
        // ]
    }
];
