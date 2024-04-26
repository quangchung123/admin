import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../lib/customBaseQuery";
import {END_POINT_LOGIN} from "../config/api/endPoint";

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getUserLogin: builder.query({
            query(body) {
                return {
                    url: `${END_POINT_LOGIN}/login`,
                    method: "GET",
                    body
                }
            }
        })
    })
});
export const {useGetUserLoginQuery} = loginApi;