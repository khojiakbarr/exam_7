import React from "react";
import MyCard from "../components/MyCard";
import { useGetJobsQuery } from "../store/APiSlice/JobApi";

export default function Home() {
  const { data } = useGetJobsQuery();
  return (
    <div>
      <h1 className="text-2xl text-gray-900 dark:text-white text-center my-2">
        Jobs
      </h1>
      {data?.map((job) => {
        return <MyCard key={job.id} job={job} />;
      })}
    </div>
  );
}
