import {configureStore} from "@reduxjs/toolkit";
import {loginApi} from "../services/login";

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loginApi.middleware)
})
console.log(loginApi);
