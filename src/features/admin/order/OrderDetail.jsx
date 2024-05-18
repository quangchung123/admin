import React, {useState} from 'react';
import styles from "../Admin.module.scss";
import MyButton from "../../../components/Elements/Button/MyButton";
import {columnDetailProductOrder, statusOrder} from "../../../config";
import {ROUTER_ADMIN, ROUTER_INIT} from "../../../config/constant";
import {useNavigate, useParams} from "react-router-dom";
import {useGetDetailOrderQuery, useUpdateOrderMutation} from "../../../services/order";
import dataCities from "../../../config/address/cities.json";
import dataDistricts from "../../../config/address/districts.json";
import {convertToVietnameseDong, getNameAddressByCode} from "../../../utils/help";
import TableList from "../../../components/Table/TableList";

const OrderDetail = () => {
		const { orderId } =useParams();
		const { data } = useGetDetailOrderQuery(orderId);
		const [updateOrder] = useUpdateOrderMutation();
		const dataListProduct = data?.products.dataProduct;
		const [valueSelectOption, setValueSelectOption] = useState('');
		const navigate = useNavigate();
		const handleGoToPage = () => {
				navigate(`${ROUTER_INIT.ADMIN}/${ROUTER_ADMIN.ORDER}`)
		}
		const handleSelect = (event) => {
				setValueSelectOption(event.target.value);
		}
		const handleChangeStatusOrder = async () => {
				try {
						if(valueSelectOption !== 'Thay đổi trạng thái') {
								const payload = {
										...data,
										status: valueSelectOption
								}
								await updateOrder(payload)
						}
				} catch (e) {
						console.log(e)
				}
		}
		return (
				<div className={styles.container}>
						<div>
								<h2 className="text-3xl font-semibold">Chi tiết</h2>
								<MyButton onClick={handleGoToPage} styleModify={"mt-4 bg-primary py-1.5 px-2.5 rounded text-white"}>
										<i className="bi bi-arrow-left-short not-italic">
											Quay trở lại
										</i>
								</MyButton>
						</div>
						<div className={styles.content}>
								<header className="h-24 bg-primary flex justify-between items-center">
										<div className="flex flex-col">
												<span className="text-white font-bold text-lg">Mã đơn hàng</span>
												<span className="text-white text-sm">{orderId}</span>
										</div>
										<div>
												<label className="text-white font-bold text-lg mr-3">Trạng thái</label>
												<select onChange={handleSelect}>
														<option>{data?.status}</option>
														{statusOrder
																.filter(status => status.label !== data?.status)
																.map(status => (
																<option key={status.key}>{status.label}</option>
														))}
												</select>
												<button className="py-2 px-4 bg-[#198754] rounded text-white ml-4" onClick={handleChangeStatusOrder}>Lưu</button>
										</div>
								</header>
								<div className={styles.infoOrder}>
										<div className={styles.infoOrderGroup}>
												<div className={styles.infoOrderIcon}>
														<i className="bi bi-person-fill text-[#198754] text-2xl"></i>
												</div>
												<div className={styles.infoOrderDetail}>
														<span className={styles.infoLabel}>Khách hàng</span>
														<div className={styles.infoGroup}>
																<span>{data?.address.name}</span>
																<span>{data?.address.phone}</span>
																<span>{data?.email}</span>
														</div>
												</div>
										</div>
										<div className={styles.infoOrderGroup}>
												<div className={styles.infoOrderIcon}>
														<i className="bi bi-truck text-[#198754] text-2xl"></i>
												</div>
												<div className={styles.infoOrderDetail}>
														<span className={styles.infoLabel}>Thông tin đơn hàng</span>
														<div className={styles.infoGroup}>
																<span>{data?.shipping}</span>
																<span>{data?.payment}</span>
														</div>
												</div>
										</div>
										<div className={styles.infoOrderGroup}>
												<div className={styles.infoOrderIcon}>
														<i className="bi bi-geo-alt-fill text-[#198754] text-2xl"></i>
												</div>
												<div className={`${styles.infoOrderDetail} pr-28`}>
														<span className={styles.infoLabel}>Địa chỉ</span>
														<div className="space-x-2">
																<span>{data?.address.detail}</span>
																<span>{getNameAddressByCode(data?.address.districts, dataDistricts)}</span>
																<span>{getNameAddressByCode(data?.address.city, dataCities)}</span>
														</div>
												</div>
										</div>
								</div>
								<TableList dataTable={dataListProduct} columnTable={columnDetailProductOrder} />
								<div className="h-20 flex flex-col items-end mx-2 space-y-2 border-t-2">
										<div className="space-x-2 mr-20 mt-4">
												<span className="text-xl opacity-85">Thành tiền:</span>
												<span className="text-second text-lg">{convertToVietnameseDong(data?.totalPrice)}</span>
										</div>
								</div>
						</div>
				</div>
		);
};

export default OrderDetail;