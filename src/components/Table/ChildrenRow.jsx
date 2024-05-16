import React from 'react';

const ChildrenRow = ({dataMultipleRow}) => {
		return (
						<ul>
								{dataMultipleRow?.map((item, index) => (
										<li key={index}>{item.name}</li>
								))}
						</ul>
		);
};

export default ChildrenRow;