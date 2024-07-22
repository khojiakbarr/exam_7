import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../URL";

const CompanyApi = createApi({
  reducerPath: "CompanyApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["companies"],
  endpoints: (builder) => ({
    getCompany: builder.query({
      query: () => "/companies",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "companies", id })),
              "companies",
            ]
          : ["companies"],
    }),
    addCompany: builder.mutation({
      query: (company) => ({
        url: "/companies",
        method: "POST",
        body: company,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "companies", id }],
    }),
  }),
});
export const { useGetCompanyQuery, useAddCompanyMutation } = CompanyApi;

export default CompanyApi;
