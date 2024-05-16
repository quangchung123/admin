import React, {useEffect, useState} from 'react';
import TableList from "../../components/Table/TableList";
import {columnCategories, columnOrder, columnUser, tabsOrder, tabsUser} from "../../config";
import useModal from "../../hooks/useModal";
import styles from "./Admin.module.scss";
import MyButton from "../../components/Elements/Button/MyButton";
import ModalUser from "../../components/Modal/ModalUser";
import MyTabs from "../../components/Elements/Tabs/MyTabs";
import InputSearch from "../../components/Elements/Search/InputSearch";
import {useGetListOrderQuery} from "../../services/order";

const Order = () => {
		const {data} = useGetListOrderQuery();
		const [tabSelected, setTabSelected] = useState('Đang xử lý');
		const [dataFilterByTabName, setDataFilterByTabName] = useState([]);
		const transformedDataOrders = data?.map(order => ({
						email: order.email,
						totalPrice: order.totalPrice,
						payment: order.payment,
						productName:  order.products.dataProduct,
						status: "Đang xử lý"
				})
		);
		const listActionIconProduct = [
				{
						key: 1,
						title: 'Detail',
				}
		];
		useEffect(() => {
				setDataFilterByTabName(transformedDataOrders?.filter((data) => data.status === tabSelected))
		}, [tabSelected, data]);
		return (
				<div className={styles.container}>
						<div className={styles.header}>
								<h2 className={styles.headerTitle}>Order</h2>
						</div>
						<div className={styles.content}>
								{/*<header>*/}
								{/*		<InputSearch setValueInput={setValueInput} />*/}
								{/*</header>*/}
								<MyTabs tabs={tabsOrder} setTabSelected={setTabSelected} tabSelected={tabSelected} />
								<TableList dataTable={dataFilterByTabName} columnTable={columnOrder} listIconButton={listActionIconProduct} />
						</div>
				</div>
		);
};

export default Order;
