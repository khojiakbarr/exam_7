import { Table } from "flowbite-react";
import React from "react";

export default function TableItems({ company, openJob, setOpenJob }) {
  const { name, description, year, id } = company;
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {name}
      </Table.Cell>
      <Table.Cell>{year}</Table.Cell>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>
        <button
          onClick={() => setOpenJob({ ...openJob, id: id, isModal: true })}
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          View Jobs
        </button>
      </Table.Cell>
    </Table.Row>
  );
}
