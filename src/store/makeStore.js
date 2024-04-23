import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../services/login";
import userAccountSlice from "./action/userAccountSlice";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loginApi.middleware)
});

export const persistor  = persistStore(store)
