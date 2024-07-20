import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

export default function AddJobs() {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <h1 className="text-gray-900 dark:text-white text-2xl mb-[10px] font-bold">
        Jobs
      </h1>
      <form className="flex w-[400px] flex-col gap-4">
        <div>
          <TextInput type="text" placeholder="Title" required />
        </div>
        <div>
          <TextInput type="number" required placeholder="Salary" />
        </div>{" "}
        <div>
          <TextInput type="text" required placeholder="location" />
        </div>
        <Select>
          <option disabled value="null">
            Company null
          </option>
        </Select>
        <textarea
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
          name="description"
          placeholder="Description"
        ></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
