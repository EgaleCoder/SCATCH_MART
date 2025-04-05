import React from "react";
import { useFilter } from "../../context/fillterContext.jsx";

const Input = () => {
  const {
    filter: { text },
    updateFilterValue,
  } = useFilter();
  return (
    <div className="relative flex items-center">
      <svg
        className="size-6 absolute left-2 text-gray-500"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full"
      >
        <input
          placeholder="Try HandBag, Bagpack or Search by Product"
          className="border-2 border-gray-400 px-8 py-3 w-75 lg:w-60 md:w-50 transition-all outline-none"
          name="text"
          value={text}
          onChange={updateFilterValue}
          type="search"
        />
      </form>
    </div>
  );
};

export default Input;
