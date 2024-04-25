import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleLoadDataFromStorage } from "../utils/help";
import { LOCAL_STORAGE_KEY, ROUTER_ADMIN, ROUTER_INIT } from "../config/constant";
import DashBoard from "../features/admin/DashBoard";
import Test from "../features/admin/Test";
import MainLayout from "../container/MainLayout";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.userAccount.user);
  const storedUser = handleLoadDataFromStorage(LOCAL_STORAGE_KEY.PERSIST_STORE).user;
  const parsedPersistedData = JSON.parse(storedUser);
  return user || parsedPersistedData ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to={ROUTER_INIT.LOGIN} />
  );
};

export const protectedRoutes = [
  {
    path: ROUTER_INIT.ADMIN,
    element: <ProtectedRoute />,
    children: [
      { path: 'product', element: <Test /> }
    ]
  }
];
