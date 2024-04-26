import React from 'react';
import InputField from "../Input/InputField";

const FormField = ({control, errors, name, placeholder, label, type="text"}) => {
		return (
				<div>
						<label>{label}</label>
						<InputField
								name={name}
								type={type}
								control={control}
								placeholder={placeholder}
								errors={errors}
								/>
				</div>
		);
};

export default FormField;