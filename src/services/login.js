import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://crudcrud.com/api/'}),
    endpoints: (builder) => ({
        getUserLogin: builder.query({
            query(body) {
                return {
                    url: "46d0ccddb0f449948cfab081ee19f717/login",
                    method: "GET",
                    body
                }
            }
        })
    })
});
export const {useGetUserLoginQuery} = loginApi;