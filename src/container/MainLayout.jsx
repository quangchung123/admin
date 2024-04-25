import React from 'react';
import Content from "./Content";

const MainLayout = ({children}) => {
		return (
				<Content>
						{children}
				</Content>
		);
};

export default MainLayout;