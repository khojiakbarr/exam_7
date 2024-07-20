import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../URL";

const JobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => `/jobs`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "companies", id })) : [],
    }),
    addJobs: builder.mutation({
      query: (job) => ({
        url: `/jobs`,
        method: "POST",
        body: job,
      }),
      invalidatesTags: (result, error, { job }) => [{ type: "JobApi", job }],
    }),
  }),
});

export const { useGetJobsQuery, useAddJobsMutation } = JobApi;

export default JobApi;
