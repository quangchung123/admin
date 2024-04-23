import Test from "../features/admin/Test";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {handleLoadDataFromStorage} from "../utils/help";
import {LOCAL_STORAGE_KEY, ROUTER_INIT} from "../config/constant";

const ProtectedRoute = () => {
    const user = useSelector((state) => state.userAccount.user);
    const storedUser = handleLoadDataFromStorage(LOCAL_STORAGE_KEY.PERSIST_STORE).user;
    const parsedPersistedData = JSON.parse(storedUser);
    return user || parsedPersistedData ? <Test /> : <Navigate to={ROUTER_INIT.LOGIN} />;
}
export const protectedRoutes = [
    {
        path: ROUTER_INIT.ADMIN,
        element: <ProtectedRoute />,
        // children: [
        //     { path: "admin", element: <Test /> }
        // ]
    }
];

