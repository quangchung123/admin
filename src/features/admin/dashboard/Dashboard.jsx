import React from 'react';
import styles from "../Dashboard.module.scss";
import {useGetListOrderQuery} from "../../../services/order";

const Dashboard = () => {
		const {data} = useGetListOrderQuery();
		const totalRevenue = 50000; // Example value
		const totalProducts = 200; // Example value
		const totalOrders = 150; // Example value
		return (
				<div className={styles.container}>
						<div className={styles.header}>
								<h2 className={styles.headerTitle}>Dashboard</h2>
						</div>
						<div className={styles.content}>
								<div className={styles.contentGroupItem}>
										<div className={styles.contentItem}>
												<h3>Tổng doanh thu</h3>
												<p>${totalRevenue.toLocaleString()}</p>
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
