import React, { useState } from 'react';
import styles from './FormLogin.module.scss';
import { useForm } from "react-hook-form";
import InputField from "../../components/Elements/InputField";
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaLogin } from "../../config/validate";
import { useGetUserLoginQuery } from "../../services/login";
import { useNavigate } from "react-router-dom";
import {handleSaveDataToStorage} from "../../utils/help";
import {LOCAL_STORAGE_KEY} from "../../config/constant";

const Login = ({children}) => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schemaLogin)
    });
    const { data } = useGetUserLoginQuery();
    const onSubmit = (payload) => {
        const isExists = data.find((item) => item.username === payload.username && item.password === payload.password);
        if (isExists) {
            handleSaveDataToStorage(LOCAL_STORAGE_KEY.ACCOUNT_USER, payload);
            navigate("/admin");
            console.log("____________")
        } else {
            setLoginError(true);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formItem}>
                    <p>Login</p>
                </div>
                <div>
                    <label>Tên đăng nhập</label>
                    <InputField
                        type="text"
                        placeholder="Tên đăng nhập"
                        name="username"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <InputField
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        control={control}
                        errors={errors}
                    />
                </div>
                {loginError && <p className={styles.error}>Tên đăng nhập hoặc mật khẩu không đúng</p>}
                <div className={styles.formItem}>
                    <button type="submit">Đăng nhập</button>
                </div>
            </form>
            {children}
        </div>
    );
};

export default Login;
