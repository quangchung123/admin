import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../lib/customBaseQuery";

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getUserLogin: builder.query({
            query(body) {
                return {
                    url: "8f9e0aa3790d4747a95ef6edada729c2/login",
                    method: "GET",
                    body
                }
            }
        })
    })
});
export const {useGetUserLoginQuery} = loginApi;