import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleLoadDataFromStorage } from "../utils/help";
import {LOCAL_STORAGE_KEY, ROUTER_ADMIN, ROUTER_INIT} from "../config/constant";
import Dashboard from "../features/admin/dashboard/Dashboard";
import Product from "../features/admin/product/Product";
import MainLayout from "../container/MainLayout";
import Categories from "../features/admin/category/Categories";
import User from "../features/admin/user/User";
import ProductDetail from "../features/admin/product/ProductDetail";
import Order from "../features/admin/order/Order";
import OrderDetail from "../features/admin/order/OrderDetail";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.userAccount.user);
  const storedUser = user? handleLoadDataFromStorage(LOCAL_STORAGE_KEY.PERSIST_STORE).user : null;
  const parsedPersistedData = JSON.parse(storedUser);
  const isAuthenticated = user || parsedPersistedData;
  return isAuthenticated ? (
    <MainLayout>
      <Outlet />
    </MainLayout> ): (<Navigate to={ROUTER_INIT.LOGIN} />);
};

export const protectedRoutes = [
  {
    path: ROUTER_INIT.ADMIN,
    element: <ProtectedRoute />,
    children: [
      { path: ROUTER_ADMIN.DASHBOARD, element: <Dashboard /> },
      { path: ROUTER_ADMIN.PRODUCT, element: <Product /> },
      { path: `${ROUTER_ADMIN.PRODUCT}/:productId`, element: <ProductDetail /> },
      { path: ROUTER_ADMIN.CATEGORY, element: <Categories /> },
      { path: ROUTER_ADMIN.USER, element: <User /> },
      { path: ROUTER_ADMIN.ORDER, element: <Order /> },
      { path: `${ROUTER_ADMIN.ORDER}/:orderId`, element: <OrderDetail /> },
    ]
  }
];
