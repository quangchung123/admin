import React, {useMemo} from 'react';
import styles from "../Dashboard.module.scss";
import {useGetListOrderQuery} from "../../../services/order";
import {statusOrder} from "../../../config";
import {convertToVietnameseDong} from "../../../utils/help";
import {useGetListProductQuery} from "../../../services/product";

const Dashboard = () => {
		const {data} = useGetListOrderQuery();
		const { data: productList } = useGetListProductQuery();
		const totalRevenue = useMemo(() => {
				if(!data) return 0;
				const completeOrder = data?.filter(order => order.status === statusOrder[2].label);
				return completeOrder.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice, 0)
		} , [data])
		const totalProducts = productList?.length;
		const totalOrders = data?.length;
		return (
				<div className={styles.container}>
						<div className={styles.header}>
								<h2 className={styles.headerTitle}>Dashboard</h2>
						</div>
						<div className={styles.content}>
								<div className={styles.contentGroupItem}>
										<div className={styles.contentItem}>
												<h3>Tổng doanh thu</h3>
												<p>{convertToVietnameseDong(totalRevenue)}</p>
										</div>
										<div className={styles.contentItem}>
												<h3>Tổng sản phẩm</h3>
												<p>{totalProducts}</p>
										</div>
										<div className={styles.contentItem}>
												<h3>Tổng đơn hàng</h3>
												<p>{totalOrders}</p>
										</div>
								</div>
						</div>
				</div>
		);
};

export default Dashboard;
