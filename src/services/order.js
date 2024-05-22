import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../lib/customBaseQuery";
import {END_POINT_ORDER} from "../config/api/endpoint";

const orderApi = createApi({
		reducerPath: 'orderApi',
		baseQuery: customBaseQuery,
		tagTypes: ['order'],
		endpoints: (builder) => ({
				getListOrder: builder.query({
						query(body) {
								return {
										url: `${END_POINT_ORDER}/order`,
										method: 'GET',
										body
								}
						},
						providesTags: ['order']
				}),
				createNewOrder: builder.mutation({
						query: (body) => {
								return {
										url: `${END_POINT_ORDER}/order`,
										method: 'POST',
										body
								}
						},
						invalidatesTags: ['order']
				}),
				updateOrder: builder.mutation({
						query: (body) => {
								const {_id, ...payload} = body
								return {
										url: `${END_POINT_ORDER}/order/${_id}`,
										method: 'PUT',
										body: payload
								}
						},
						invalidatesTags: ['order']
				}),
				getDetailOrder: builder.query({
						query(id) {
								return {
										url: `${END_POINT_ORDER}/order/${id}`,
										method: 'GET',
								}
						},
						providesTags: ['order']
				}),
		})
})
export const {
		useCreateNewOrderMutation,
		useGetListOrderQuery,
		useUpdateOrderMutation,
		useGetDetailOrderQuery
} = orderApi
export default orderApi;