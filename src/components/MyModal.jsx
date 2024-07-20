import { Modal, Table } from "flowbite-react";
import { useGetJobsQuery } from "../store/APiSlice/JobApi";
import { useMemo } from "react";
import JobItem from "./JobItem";

export default function MyModal({ openJob, setOpenJob }) {
  const { isModal, id } = openJob;
  const { data } = useGetJobsQuery();

  const companyJobs = useMemo(() => {
    console.log(data);
    return data?.filter((job) => job.companyID === id);
  }, [data, isModal]);

  return (
    <>
      <Modal
        dismissible
        show={isModal}
        onClose={() => setOpenJob({ ...openJob, isModal: false })}
        size="3xl"
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <Table>
            <Table.Head>
              <Table.HeadCell>Job Title</Table.HeadCell>
              <Table.HeadCell>salary</Table.HeadCell>
              <Table.HeadCell>location</Table.HeadCell>
              <Table.HeadCell>salaryType</Table.HeadCell>
              <Table.HeadCell>description</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {companyJobs?.map((job) => (
                <JobItem key={job.id} job={job} />
              ))}
            </Table.Body>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}
