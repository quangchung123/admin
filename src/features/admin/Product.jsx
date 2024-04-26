import React from 'react';
import {useDeleteProductMutation, useGetListProductQuery} from "../../services/product";
import TableList from "../../components/Table/TableList";
import {columnProduct} from "../../config";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal/MyModal";
import {editIcon, deleteIcon} from "../../assets";

const Product = () => {
		const { data } = useGetListProductQuery();
		const {isShowing, toggle} = useModal();
		const [mutation] = useDeleteProductMutation();
		const handleDeleteRow = (index) => {
				mutation(index)
		}
		const listActionIconProduct = [
				{
						src: editIcon,
						alt: "EditIcon",
						handleRowAction: toggle
				},
				{
						src: deleteIcon,
						alt: "DeleteIcon",
						handleRowAction: handleDeleteRow
				}
		]
		return (
				<div className="box-border p-8">
						<div>
								<span>Products</span>
								<button onClick={toggle}>Create New</button>
						</div>
						<div className="bg-white box-border">
								<header>
										<input />
										<select>
												<option>All category</option>
												<option>Electronic</option>
												<option>Clothing</option>
										</select>
								</header>
								<TableList dataTable={data} columnTable={columnProduct} listIconButton={listActionIconProduct}/>
								<Modal
										isShowing={isShowing}
										hide={toggle}
								/>
						</div>
				</div>
		);
};

export default Product;
