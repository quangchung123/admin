import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../lib/customBaseQuery";

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getUserLogin: builder.query({
            query(body) {
                return {
                    url: "d834c23498254d418e2a918e8fec3918/login",
                    method: "GET",
                    body
                }
            }
        })
    })
});
export const {useGetUserLoginQuery} = loginApi;