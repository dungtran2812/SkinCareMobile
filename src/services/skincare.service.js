import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./api.service";
import endpoints from "../constants/endpoint";

const skincareApi = createApi({
	reducerPath: "skincareApi",
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		// Endpoint for login
		login: builder.mutation({
			query: (data) => ({
				url: endpoints.LOGIN,
				method: "POST",
				data: data,
			}),
		}),

		// // Template for POST mutation
		// samplePostMutation: builder.mutation({
		// 	query: (data) => ({
		// 		url: endpoints.SAMPLE_ENDPOINT,
		// 		method: "POST",
		// 		data: data,
		// 	}),
		// }),

		// // Template for GET query
		// sampleGetQuery: builder.query({
		// 	query: () => ({
		// 		url: endpoints.SAMPLE_ENDPOINT,
		// 		method: "GET",
		// 	}),
		// }),

		// // Template for PUT mutation with ID parameter
		// samplePutMutation: builder.mutation({
		// 	query: ({ id, data }) => ({
		// 		url: `${endpoints.SAMPLE_ENDPOINT}/${id}`,
		// 		method: "PUT",
		// 		data: data,
		// 	}),
		// }),

		// // Template for DELETE mutation
		// sampleDeleteMutation: builder.mutation({
		// 	query: (id) => ({
		// 		url: `${endpoints.SAMPLE_ENDPOINT}/${id}`,
		// 		method: "DELETE",
		// 	}),
		// }),
	}),
});

export const {
	useLoginMutation,
} = skincareApi;

export default skincareApi;
