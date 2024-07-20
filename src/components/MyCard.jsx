import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MyCard({ job }) {
  const { title, id, salary, description, location, salaryType } = job || {};
  return (
    <Card className="w-[300px]">
      <h2 className="text-gray-900 dark:text-white font-bold">{title}</h2>
      <div className="flex items-end gap-[10px]">
        <h2 className="text-gray-900 dark:text-white text-xl font-medium  ">
          Location:{" "}
        </h2>{" "}
        <p className="text-gray-900 dark:text-white"> {location} </p>
      </div>
      <div className="flex items-end  gap-[10px]">
        {" "}
        <h2 className="text-gray-900 dark:text-white text-xl font-medium">
          SalaryType:{" "}
        </h2>{" "}
        <p className="text-gray-900 dark:text-white">{salaryType}</p>
      </div>
      <div className="flex items-end gap-[10px]">
        <h2 className="text-gray-900 dark:text-white text-xl font-medium">
          Description:{" "}
        </h2>{" "}
        <p className="text-gray-900 dark:text-white">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-end gap-2">
          <h1 className="text-gray-900 dark:text-white text-xl font-medium">
            Salary:
          </h1>
          <h2 className="dark:text-white font-normal">
            <span className="font-bold">{salary} </span>
            <span className="font-normal text-sm"> UZS</span>
          </h2>
        </div>
        <Link to={`/${id}`}>
          {" "}
          <Button size={"sm"}>Open</Button>
        </Link>
      </div>
    </Card>
  );
}
