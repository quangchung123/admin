import * as yup from "zod";
export const schemaLogin = yup.object({
    email: yup.string().nonempty().email('Email không hợp lệ').trim(),
    password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').trim(),
});