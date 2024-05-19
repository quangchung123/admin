import React from 'react';
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import styles from "./MenuAction.module..scss"

const MenuAction = ({data, value, typeMain}) => {
		console.log("typeMain", typeMain)
		return (
				<div className={styles.menus}>
						<Menu
								menuButton={ <MenuButton><i className="bi bi-three-dots"></i></MenuButton> }
								arrow={true}
								className={"hover:bg-primary"}
						>
								{data.map(({title, handleRowAction}, index) => (
										<div key={index}>
												<MenuItem onClick={()=> handleRowAction(value._id)}>
														{title}
												</MenuItem>
										</div>
								))}
						</Menu>
				</div>
		);
};

export default MenuAction;