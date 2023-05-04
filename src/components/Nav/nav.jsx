import React from "react";
import Select from "react-select";
import { useState } from "react";

const Nav = () => {
  const [price] = useState([
    { value: "0-50", label: "$0 - $50" },
    { value: "50-150", label: "$50 - $150" },
    { value: "150-300", label: "$150 - $300" },
    { value: "300+", label: "$300+" },
  ]);
  const [category] = useState([
    { value: "Japanese", label: "Japanese" },
    { value: "Italian", label: "Italian" },
    { value: "Chinese", label: "Chinese" },
    { value: "French", label: "French" },
    { value: "Thai", label: "Thai" },
    { value: "Mexican", label: "Mexican" },
  ]);
  // const [setSelectedPrice] = useState(null);
  // const [setSelectedCategory] = useState(null);
  // const clearFilter = () => {
  //   setSelectedPrice(null);
  //   setSelectedCategory(null);
 
  // };

  return (
    <section className="container mx-auto flex items-center justify-between border-y border-y-slate-300 py-4 px-16 my-10">
      <div className="flex items-center space-x-4">
        <span>Filter by:</span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border-b border-b-slate-300 pb-1">
            <input type="radio" name="open" id="radio" />
            <label htmlFor="radio" className="ml-1 text-slate-500">
              Open Now
            </label>
          </div>
          <Select
  name="Price"
  placeholder="Price"
  isClearable={true}
  options={price}
  className="w-auto lg:w-[200px]"
  // onChange={(value) => setSelectedPrice(value)}
/>         
<Select
  name="Categories"
  placeholder="Categories"
  isClearable={true}
  options={category}
  // onChange={(value) => setSelectedCategory(value)}
  className="w-auto lg:w-[200px]"
/>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="py-2 px-6 border border-slate-300 text-sm text-slate-300 hover:bg-slate-900 hover:text-white duration-200"
          // onClick={clearFilter}
        >
          CLEAR ALL
        </button>
      </div>
    </section>
  );
};

export default Nav;
