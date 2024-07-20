import { Table } from "flowbite-react";
import TableItems from "../components/TableItems";
import { useEffect, useState } from "react";
import MyModal from "../components/MyModal";
import { useGetCompanyQuery } from "../store/APiSlice/CompaniyApi";

export default function Companies() {
  const [openJob, setOpenJob] = useState({
    isModal: false,
    id: "",
  });

  const { data: companies } = useGetCompanyQuery();

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Company Name</Table.HeadCell>
            <Table.HeadCell>year</Table.HeadCell>
            <Table.HeadCell>description</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {companies?.map((company) => (
              <TableItems
                key={company.id}
                company={company}
                setOpenJob={setOpenJob}
                openJob={openJob}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
      <MyModal openJob={openJob} setOpenJob={setOpenJob} />
    </>
  );
}
