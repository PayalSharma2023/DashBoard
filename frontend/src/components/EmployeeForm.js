import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createEmployee = async (data) => {
    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );
    console.log("data=>>>>>", data, "\n");

    console.log("FORM RESPONSE.....", savedUserResponse);

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createEmployee)} className="mt-8 bg">
        <div className="space-y-5">
          <label
            htmlFor="name"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            Employee Name{" "}
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              placeholder="Enter Your full Name"
              {...register("name")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            Employee Email Id{" "}
          </label>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="title"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            Employee Title{" "}
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed diabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              placeholder="Enter your Employee Title"
              {...register("title")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="department"
            className="text-base font-medium text-gray-900drak:text-gray-200"
          >
            {" "}
            Employee Department{" "}
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              placeholder="Enter your Employee Department"
              {...register("department")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="role"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            Employee Role{" "}
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              placeholder="Enter your Employee Role"
              {...register("role")}
            />
          </div>
        </div>

        <div>
          <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
          >
            Create Employee
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 01-6.75-6.75M19.5 121-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
