import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGetCompanyQuery } from "../store/APiSlice/CompaniyApi";
import { useGetJobsQuery } from "../store/APiSlice/JobApi";
import { Card } from "flowbite-react";

export default function JobDetails() {
  const { id } = useParams();
  const { data: companies } = useGetCompanyQuery();
  const { data: jobs } = useGetJobsQuery();

  const jobInfo = useMemo(() => {
    return jobs?.find((job) => job.id === id);
  }, [jobs]);

  const companyInfo = useMemo(() => {
    return companies?.find((company) => company.id === jobInfo.companyID);
  }, [companies]);

  return (
    <div>
      <h1 className="text-gray-900 dark:text-white font-bold text-3xl mb-[20px]">
        Job Details
      </h1>
      <div className="flex justify-between w-full">
        <Card className="w-[45%]">
          <h2 className="text-gray-900 dark:text-white font-bold text-xl ">
            Job Title: <span className="font-normal">{jobInfo?.title}</span>
          </h2>
          <p className="text-gray-900 dark:text-white font-bold text-xl ">
            Description:{" "}
            <span className="font-normal">{jobInfo?.description}</span>
          </p>{" "}
          <p className="text-gray-900 dark:text-white font-bold text-xl ">
            Location: <span className="font-normal">{jobInfo?.location}</span>
          </p>{" "}
          <p className="text-gray-900 dark:text-white font-bold text-xl ">
            SalaryType:{" "}
            <span className="font-normal">{jobInfo?.salaryType}</span>
          </p>
          <p className="text-gray-900 dark:text-white font-bold text-xl ">
            Salary: <span className="font-normal">{jobInfo?.salary} UZS</span>
          </p>{" "}
        </Card>
        <Card className="w-[45%]">
          <h2 className="text-gray-900 dark:text-white font-normal text-xl ">
            Name: <span className="font-extrabold">{companyInfo?.name}</span>
          </h2>{" "}
          <h2 className="text-gray-900 dark:text-white font-normal text-xl ">
            Company Year:{" "}
            <span className="font-extrabold">{companyInfo?.year}</span>
          </h2>{" "}
          <h2 className="text-gray-900 dark:text-white font-normal text-xl ">
            Description:{" "}
            <span className="font-extrabold">{companyInfo?.description}</span>
          </h2>
        </Card>
      </div>
    </div>
  );
}
