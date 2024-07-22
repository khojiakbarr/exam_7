import { Button, TextInput } from "flowbite-react";
import { useAddCompanyMutation } from "../store/APiSlice/CompaniyApi";
import { useForm } from "react-hook-form";

export default function AddCompany() {
  const { handleSubmit, register, reset } = useForm();
  const [addCompany] = useAddCompanyMutation();
  const postData = (data) => {
    console.log(data);
    addCompany(data);
    reset();
  };
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <h1 className="text-gray-900 dark:text-white  text-2xl mb-[10px] font-bold">
        Add Company
      </h1>
      <form
        onSubmit={handleSubmit((data) => postData(data))}
        className="flex w-[400px] flex-col gap-4"
      >
        <div>
          <TextInput
            type="text"
            placeholder="CompanynName"
            required
            {...register("name")}
          />
        </div>
        <div>
          <TextInput
            type="number"
            required
            placeholder="Year"
            {...register("year")}
          />
        </div>
        <textarea
          {...register("description")}
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
          name="description"
          placeholder="Description"
        ></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
