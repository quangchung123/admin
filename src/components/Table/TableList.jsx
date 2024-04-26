import React from 'react';
import IconActions from "../Elements/Icon/IconAction";

const TableList = ({ dataTable, columnTable, listIconButton}) => {
		return (
				<div>
						<table className="w-full border-collapse border">
								<thead className="text-third">
								<tr>
										{columnTable.map((column) => (
												<th key={column.key} className="py-2 px-4 text-left border">{column.label}</th>
										))}
								</tr>
								</thead>
								<tbody>
								{dataTable?.map((value, index) => (
										<tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
												{columnTable?.map((column) => (
														<td key={column.key} className="border py-2 px-4">
																{column.key === 'image' ? (
																		<img src={value[column.key]} alt="Product" className="w-16 h-auto" />
																) : column.key === 'action' ? (
																		<IconActions value={value} listIconButton={listIconButton} />
																) : (
																		value[column.key]
																)}
														</td>
												))}
										</tr>
								))}
								</tbody>
						</table>
				</div>
		);
};

export default TableList;
