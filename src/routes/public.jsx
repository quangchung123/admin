import Login from "../features/auth/Login";
import {handleLoadDataFromStorage} from "../utils/help";
import {LOCAL_STORAGE_KEY} from "../config/constant";

const result = handleLoadDataFromStorage(LOCAL_STORAGE_KEY.ACCOUNT_USER);
export const publicRoutes = [
    {
        path: '/login',
        element: <Login />
    }
]