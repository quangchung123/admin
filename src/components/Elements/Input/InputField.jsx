import React from 'react';
import { Controller } from "react-hook-form";

const InputField = ({ name, type, placeholder, control, errors }) => {
    const isError = errors[name];
    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div>
                        <input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                            value={field.value || ''}
                        />
                        {isError && <p role="alert" className="error text-second text-sm">{errors[name].message}</p>}
                    </div>
                )}
            />
        </div>
    );
};

export default InputField;
