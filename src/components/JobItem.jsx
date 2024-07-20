import { Table } from "flowbite-react";
import React from "react";

export default function JobItem({ job }) {
  const { title, description, salary, location, salaryType } = job;
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {title}
      </Table.Cell>
      <Table.Cell>{salary} UZS</Table.Cell>
      <Table.Cell>{salaryType}</Table.Cell>
      <Table.Cell>{location}</Table.Cell>
      <Table.Cell>{description}</Table.Cell>
    </Table.Row>
  );
}
