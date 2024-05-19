import React, {useEffect, useState} from 'react';
import TableList from "../../../components/Table/TableList";
import {columnCategories, columnOrder, columnUser, statusOrder, tabsUser} from "../../../config";
import styles from "../Admin.module.scss";
import MyTabs from "../../../components/Elements/Tabs/MyTabs";
import {useGetListOrderQuery} from "../../../services/order";
import {ROUTER_ADMIN, ROUTER_INIT} from "../../../config/constant";
import {useNavigate} from "react-router-dom";

const Order = () => {
		const {data} = useGetListOrderQuery();
		const [tabSelected, setTabSelected] = useState('Đang xử lý');
		const [dataFilterByTabName, setDataFilterByTabName] = useState([]);
		const navigate = useNavigate();
		const transformedDataOrders = data?.map(order => ({
						email: order.email,
						totalPrice: order.totalPrice,
						payment: order.payment,
						productName: order.products.dataProduct,
						status: order.status,
						_id: order._id
				})
		);
		const handleGoToDetailPage = (index) => {
				navigate(`${ROUTER_INIT.ADMIN}/${ROUTER_ADMIN.ORDER}/${index}`)
		}
		const listActionIconOrder = [
				{
						key: 1,
						title: 'Detail',
						handleRowAction: handleGoToDetailPage
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
								<MyTabs tabs={statusOrder} setTabSelected={setTabSelected} tabSelected={tabSelected} />
								<TableList dataTable={dataFilterByTabName} columnTable={columnOrder} listIconButton={listActionIconOrder} typeMain={'Order'}/>
						</div>
				</div>
		);
};

export default Order;
