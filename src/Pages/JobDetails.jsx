import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGetCompanyQuery } from "../store/APiSlice/CompaniyApi";
import { useGetJobsQuery } from "../store/APiSlice/JobApi";

export default function JobDetails() {
  const { id } = useParams();
  const { data: companies } = useGetCompanyQuery();
  const { data: jobs } = useGetJobsQuery();
  const mainJobInfo = useMemo();
  return (
    <div>
      <h1>Job Details</h1>
    </div>
  );
}
