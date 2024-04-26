import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../services/login";
import userAccountSlice from "./action/userAccountSlice";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {productApi} from "../services/product";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};
const persistedUserAccountReducer = persistReducer(persistConfig, userAccountSlice.reducer);

export const store = configureStore({
    reducer: {
        userAccount: persistedUserAccountReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loginApi.middleware, productApi.middleware)
});

export const persistor  = persistStore(store)
