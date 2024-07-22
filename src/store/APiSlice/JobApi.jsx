import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../URL";

const JobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["jobs"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => `/jobs`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "jobs", id })), "jobs"]
          : ["jobs"],
    }),
    addJobs: builder.mutation({
      query: (job) => ({
        url: `/jobs`,
        method: "POST",
        body: job,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "jobs", id }],
    }),
  }),
});

export const { useGetJobsQuery, useAddJobsMutation } = JobApi;

export default JobApi;
