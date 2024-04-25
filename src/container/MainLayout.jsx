import React from 'react';
import Content from "./Content";
import DashBoard from "../features/admin/DashBoard";

const MainLayout = ({children}) => {
		return (
				<Content>
						<DashBoard>
								{children}
						</DashBoard>
				</Content>
		);
};

export default MainLayout;