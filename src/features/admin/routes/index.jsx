import React from 'react';
import {Route, Routes} from "react-router-dom";
import DashBoard from "../DashBoard";
import Product from "../Product";

const AdminRoutes = () => {
		return (
				<Routes>
						<Route path="/admin" element={<DashBoard />} />
						<Route path="/admin/product" element={<Product />}/>
				</Routes>
		);
};

export default AdminRoutes;