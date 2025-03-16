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

		register: builder.mutation({
      query: (userData) => ({
        url: `/auth/${endpoints.REGISTER}`,
        method: "POST",
        data: userData,
      }),
    }),
    getAllQuizQuestion: builder.query({
      query: () => ({
        url: endpoints.QUIZ_QUESTION,
        method: "GET",
      }),
      providesTags: ['QuizQuestion'],
    }),
    getAllQuizAnswerByQuestionId: builder.query({
      query: (id) => ({
        url: `${endpoints.QUIZ_ANSWER}/question/${id}`,
        method: "GET",
      }),
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `${endpoints.PRODUCT}`,
        method: "GET",
      }),
    }),
    getProductsByDiscountRange: builder.query({
      query: ({minDiscount, maxDiscount}) => ({
        url: `${endpoints.PRODUCT}/flashsale?minDiscount=${minDiscount}&maxDiscount=${maxDiscount}`,
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: `${endpoints.PRODUCT}`,
        data: product,
        method: "POST",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `${endpoints.PRODUCT}/${id}`,
        data,
        method: "PUT",
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${endpoints.PRODUCT}/${id}`,
        method: "DELETE",
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: `${endpoints.CATEGORY}`,
        method: "GET",
      }),
    }),
    addQuizQuestion: builder.mutation({
      query: (quiz) => ({
        url: `${endpoints.QUIZ_QUESTION}`,
        data: quiz,
        method: "POST",
      }),
      invalidatesTags: ['QuizQuestion'],
    }),
    updateQuizQuestion: builder.mutation({
      query: ({ id, data }) => ({
        url: `${endpoints.QUIZ_QUESTION}/${id}`,
        data,
        method: "PUT",
      }),
      invalidatesTags: ['QuizQuestion'],
    }),
    deleteQuizQuestion: builder.mutation({
      query: (id) => ({
        url: `${endpoints.QUIZ_QUESTION}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['QuizQuestion'],
    }),
    deleteQuizAnswer: builder.mutation({
      query: (id) => ({
        url: `${endpoints.QUIZ_ANSWER}/${id}`,
        method: "DELETE",
      }),
    invalidatesTags: ['QuizQuestion'],
    }),
    getAllSkinTypes: builder.query({
      query: () => ({
        url: `${endpoints.SKINTYPE}`,
        method: "GET",
      }),
    }),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useGetAllQuizQuestionQuery,
	useGetAllQuizAnswerByQuestionIdQuery,
	useGetAllProductsQuery,
  useGetProductsByDiscountRangeQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation,
	useGetAllCategoriesQuery,
	useAddQuizQuestionMutation,
	useUpdateQuizQuestionMutation,
	useDeleteQuizQuestionMutation,
	useDeleteQuizAnswerMutation,
	useGetAllSkinTypesQuery,
} = skincareApi;

export default skincareApi;
