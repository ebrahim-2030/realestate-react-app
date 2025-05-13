// imports
import React, { useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  // form state for the three dropdowns
  const [form, setForm] = useState({
    propertyType: "all",
    listingType: "all",
    location: "all",
  });

  // programmatic navigation
  const navigator = useNavigate();

  // update state when a select field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // build query string and redirect to /search-result
  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    Object.entries(form).forEach(([key, value]) => {
      // skip “all” (means no filter)
      if (value & (value !== all)) queryParams.append(key, value);
    });

    navigator(`/search-result?${params.toString()}`);
  };
  return (
    <div className="mt-10">
      <p className="text-center mb-4 text-white/80">
        What are you looking for?
      </p>

      {/* main form */}
      <form
        onSubmit={handleSubmit}
        className="w-full text-custom_black/70 text-sm  bg-white p-4 pt-6 sm:pt-4 rounded flex flex-col sm:flex-row gap-3"
      >
        {/* property type + listing type */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <label className="">Property</label>
            <select
              value={form.propertyType}
              onChange={handleChange}
              name="propertyType"
              className="mt-2 border-2 w-full p-2 rounded outline-none focus:border-brand-primary/30 text-custom_black/60"
            >
              <option value="all">All</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="">Type</label>
            <select
              value={form.listingType}
              onChange={handleChange}
              name="listingType"
              className="mt-2 border-2 w-full p-2 rounded outline-none text-custom_black/60 focus:border-brand-primary/30"
            >
              <option value="all">All</option>
              <option value="rend">Rent</option>
              <option value="sale">Sale</option>
            </select>
          </div>
        </div>

        {/* location + search button */}
        <div className="flex items-end gap-3 ">
          <div className="flex-1">
            <label>Location</label>
            <select
              value={form.location}
              onChange={handleChange}
              name="location"
              className="mt-2 text-custom_black/60 w-full border-2 p-2 rounded outline-none focus:border-brand-primary/30"
            >
              <option value="all">All</option>
              <option value="kunduz">kunduz</option>
              <option value="balkh">Balkh</option>
              <option value="kabul">Kabul</option>
            </select>
          </div>
          <button className="group mb-[0.5px] flex pl-3 pr-2   py-[6px] fex items-center   text-white bg-custom_black rounded-sm border border-custom_black text-sm">
            Search
            <IoSearchCircleSharp className="text-2xl text-white ml-2 group-hover:rotate-90 transition-all duration-200" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
